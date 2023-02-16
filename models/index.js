const mongoose = require('mongoose')
mongoose.set('strictQuery', false);

const RequestSchema = require('./request')

const Request = mongoose.model('Request', RequestSchema)

const connect = () => {
    mongoose.connect('mongodb://localhost:27017/ebacpizza')
}

console.log(connect)

module.exports = {
    connect,
    Request,
}