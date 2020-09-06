const express = require('express')
const axios = require('axios')

const app = express()
app.use(express.json())

const events = []

app.post('/events', (req, res) => {
    const event = req.body

    events.push(event)

    axios.post(`http://posts-clusterip-srv:4000/events`, event)
    axios.post(`http://comments-srv:4001/events`, event)
    axios.post(`http://query-srv:4002/events`, event)
    axios.post(`http://moderation-srv:4004/events`, event)

    res.send({ status: 'OK' })
})

app.get('/events', (req, res) => {
    res.send(events)
})

app.listen(4003, () => {
    console.log(`EVENT BUS LISTENING ON PORT 4003`)
})