const express = require('express')
const router = express.Router()
const playlistController = require('../controllers/playlist-sad')

router.get('/', playlistController.getPlaylist)

module.exports = router
