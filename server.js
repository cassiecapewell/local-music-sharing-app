const express = require('express')
const app = express()
// const mongoose = require('mongoose')
// const MongoStore = require('connect-mongo')(session)
var request = require('request'); // "Request" library
var querystring = require('querystring');
var cookieParser = require('cookie-parser');
var cors = require('cors');
// const querystring = require('querystring');

const connectDB = require('./config/database')
const homeRoutes = require('./routes/home')
const playlistLitRoutes = require('./routes/playlist-lit')
const playlistChillRoutes = require('./routes/playlist-chill')
const playlistLadiesRoutes = require('./routes/playlist-ladies')
const playlistHardRoutes = require('./routes/playlist-hard')
const playlistSadRoutes = require('./routes/playlist-sad')
const playlistFunkiRoutes = require('./routes/playlist-funki')
const aboutRoutes = require('./routes/about')
const eventsRoutes = require('./routes/events')
const featuredRoutes = require('./routes/featured')
const loginRoutes = require('./routes/login')


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
app.use('/about', aboutRoutes)
app.use('/events', eventsRoutes)
app.use('/featured', featuredRoutes)
app.use('/login', loginRoutes)




app.listen(process.env.PORT || 8080, ()=>{
    console.log('Server is running, you better catch it!')
})
