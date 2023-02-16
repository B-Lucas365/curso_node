const express = require("express")
const path = require('path')

const mainRouter = require('./routes/main')
const requestsRouter = require('./routes/requests')
const profileRouter = require('./routes/profile')
const { connect } = require('./models/index')

const app = express()

//ejs
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')


//routers
app.use('/profile', profileRouter)
app.use('/requests', requestsRouter)
app.use('/', mainRouter)

app.listen(3000, () => {
    connect()

    console.log(`Server is Running`)
})
