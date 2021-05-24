const express = require('express')
const app = express()
// const mongoose = require('mongoose')
// const MongoStore = require('connect-mongo')(session)
const connectDB = require('./config/database')
const homeRoutes = require('./routes/home')
const playlistLitRoutes = require('./routes/playlist-lit')
const playlistChillRoutes = require('./routes/playlist-chill')
const playlistLadiesRoutes = require('./routes/playlist-ladies')
const playlistHardRoutes = require('./routes/playlist-hard')
const playlistSadRoutes = require('./routes/playlist-sad')
const playlistFunkiRoutes = require('./routes/playlist-funki')


require('dotenv').config({path: './config/.env'})

connectDB()

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use('/', homeRoutes)
app.use('/playlist-lit', playlistLitRoutes)
app.use('/playlist-chill', playlistChillRoutes)
app.use('/playlist-ladies', playlistLadiesRoutes)
app.use('/playlist-hard', playlistHardRoutes)
app.use('/playlist-sad', playlistSadRoutes)
app.use('/playlist-funki', playlistFunkiRoutes)


app.listen(process.env.PORT, ()=>{
    console.log('Server is running, you better catch it!')
})
