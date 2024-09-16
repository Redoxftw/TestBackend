require('dotenv').config()

const express = require('express')

const app = express()

const port = 3000

app.get('/', (req, res) => {
    res.send('Welcome to / URL')
})

app.get('/login', (req, res) => {
    res.send('You are logged in')
})
app.get('/twitter', (req, res) => {
    res.send('<h1>Damm you are now on Twitter</h1>')
})

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${process.env.PORT}`)
})