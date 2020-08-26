const express = require('express')
const axios = require('axios')

const app = express()
app.use(express.json())

app.post('/events', async (req, res) => {
    const { type, data } = req.body

    if(type === 'commentCreated') {
        const status = data.content.includes('orange') ? 'rejected' : 'approved'

        await axios.post(`http://localhost:4003/events`, {
            type: 'commentModerated',
            data: { id: data.id, postId: data.postId, status, content: data.content }
        })
    }

    res.send({})
})

app.listen(4004, () => {
    console.log('MODERATION SERVICE LISTENING ON PORT 4004')
})