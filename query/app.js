const express = require('express')
const cors = require('cors')
const axios = require('axios')

const app = express()
app.use(cors())
app.use(express.json())

const posts = {}

const handleEvents = (type, data) => {
    if(type === 'postCreated') {
        const { id, title } = data
        posts[id] = { id, title, comments: [] }
    }

    if(type === 'commentCreated') {
        const { id, content, postId, status } = data
        posts[postId].comments.push({ id, content, status })
    }

    if(type === 'commentUpdated') {
        const { id, content, postId, status } = data
        posts[postId].comments = posts[postId].comments.map(c => c.id === id ? { id, content, status } : c)
    }
}

app.get('/posts', (req, res) => {
    res.send(posts)
})

app.post('/events', (req, res) => {
    const { type, data } = req.body

    handleEvents(type, data)

    res.send({})
})

app.listen(4002, async () => {
    console.log('QUERY SERVICE LISTENING ON PORT 4002')

    const res = await axios.get(`http://localhost:4003/events`);

    for(event of res.data) {
        console.log(`Processing Event: ${event.type}`)

        handleEvents(event.type, event.data)
    }
})