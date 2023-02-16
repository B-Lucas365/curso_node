const express = require('express')

const router = express.Router()

router.get('/', (req, res) => {
   res.render('profile/index', {
    nome: 'Lucas Renan',
    anos: 23
   })
})

module.exports = router