const Playlist = require('../models/Playlist')

module.exports = {
    getPlaylist: (req,res)=>{
        res.render('playlist-sad.ejs')
    }
}
