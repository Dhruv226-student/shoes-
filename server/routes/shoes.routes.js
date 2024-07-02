const express = require('express')
const shoesController = require('../controllers/shoes.controllers')

const router = express.Router()


router.get('/',shoesController.getAllShoes)
router.post('/',shoesController.createShoe)

module.exports =router