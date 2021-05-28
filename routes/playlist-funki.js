const express = require('express')
const router = express.Router()
const playlistController = require('../controllers/playlist-funki')

router.get('/', playlistController.getPlaylist)

router.get('/', playlistController.getInfo)

module.exports = router
