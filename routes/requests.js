const express = require('express')

const {Request} = require('../models')

const router = express.Router()

router.get('/', (req, res) => {
    Request.find({}).then((requests) => {
        res.render('requests/index', {
           requests: requests
        })
    })
})

module.exports = router