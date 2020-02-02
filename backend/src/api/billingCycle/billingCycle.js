const restful = require('node-restful')
const mongoose = restful.mongoose

const creditSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Nome do crédito é obrigatório']
  },
  value: {
    type: Number,
    min: 0,
    required: [true, 'Valor do crédito é obrigatório']
  }
})

const debitSchema = new mongoose.Schema({
  name: {
    type: String,
    require: [true, 'Nome do débito é obrigatório']
  },
  value: {
    type: Number,
    min: 0,
    required: [true, 'Valor do débito é obrigatório']
  },
  status: {
    type: String,
    required: false,
    uppercase: true,
    enum: ['PAGO', 'PENDENTE', 'AGENDADO']
  }

})

const billingCycleSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Nome do ciclo é obrigatório']
  },
  month: {
    type: Number,
    min: 1,
    max: 12,
    required: [true, 'Mês do ciclo é obrigatório']
  },
  year: {
    type: Number,
    min: 1970,
    max: 2100,
    required: [true, 'Ano do ciclo é obrigatório']
  },
  credits: [creditSchema],
  debits: [debitSchema]
})

module.exports = restful.model('BillingCycle', billingCycleSchema)
