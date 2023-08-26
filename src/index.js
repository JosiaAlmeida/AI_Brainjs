const express = require('express')
// const neural = require('./train')
const brain = require('brain.js')
const { trainnerData } = require('./utils/dataTrainer')


const app = express()



const neural = new brain.recurrent.LSTM()

neural.train(trainnerData)



app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(((req, res, next) => next()))

app.get('/', (req, res) => res.send('Inteligencia Artificial'))

app.get('/neural', (req, res) => {
  return res.json(neural.neural)
})

app.post('/neural/', async (req, res) => {
  return res.json({ data: neural.run(req.body.text) })
})

app.listen(3021, () => console.log("Rodando"))