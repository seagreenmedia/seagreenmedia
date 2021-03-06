const express = require('express')
const app = express()
const port = 3007

app.get('/', (req, res) => {
    res.send('<h1>Elu Arias Resume</h1>')
})

app.get('/contact', (req, res) => {
    res.send('<h1>Work With Me!</h1>')
})

app.listen(port, () => {
    console.log(`Pokedex app listening at http://localhost:${port}`)
})