const express = require('express')
const router = express.Router()
const featuredController = require('../controllers/featured')

router.get('/', featuredController.getFeatured)

module.exports = router
