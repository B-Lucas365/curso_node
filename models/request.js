const { Schema } = require('mongoose')

const Request = new Schema({
    cliente: {
        nome:{
            type:String,
            required: true
        },
        sobrenome: {
            type: String,
            required: true
        }
    },
    pizzas: [
        {
            sabor: {
                type: String,
                required: true
            },
            quantidade: {
                type: Number,
                required: true
            },
            tamanho: {
                type: String,
                required: true,
                enum: ['Pequeno', 'Médio', 'Grande']
            }
        }
    ],
    metodoDePagamento: {
        type: String,
        Required: true,
        enum: ['PIX', 'Cartão de credito']
    },
    total: {
        type: Number,
        required: true
    },
    pago:{
        type: Boolean,
        default: false
    }
})

module.exports = Request