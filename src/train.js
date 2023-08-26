const brain = require('brain.js')


const neural = new brain.recurrent.LSTM()


neural.train([
  {
    input: 'Estou feliz',
    output: 'Feliz'
  },
  {
    input: 'Estou triste',
    output: 'Triste'
  }
])


module.exports = { neural } 