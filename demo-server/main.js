const express = require('express')
const cors = require('cors')

const HEROES = require('./mock-heroes')

const app = express()
const port = 3000

app.use(cors({
    origin: true
}))

app.get('/heroes', (req, res) => {
    res.send(HEROES)
})

app.get('/heroes/:id', (req, res) => {
    const hero = HEROES.find(hero => String(hero.id) === req.params.id)
    if (hero) {
        res.send(hero)
    } else {
        res.sendStatus(404)
    }
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
