// const Playlist = require('../models/Playlist')

module.exports = {
    getPlaylist: (req,res)=>{
        res.render('playlist-funki.ejs')
    },
    getInfo: async (req, res)=>{
        console.log(data)
        // try{
        //     await Todo.findOneAndUpdate({_id:req.body.todoIdFromJSFile},{
        //         completed: true
        //     })
        //     console.log('Marked Complete')
        //     res.json('Marked Complete')
        // }catch(err){
        //     console.log(err)
        // }
    }

  }
