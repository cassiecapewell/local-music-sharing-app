const express = require('express')
const app = express()
// const mongoose = require('mongoose')
// const MongoStore = require('connect-mongo')(session)
const connectDB = require('./config/database')
const homeRoutes = require('./routes/home')
const playlistRoutes = require('./routes/playlist')


require('dotenv').config({path: './config/.env'})

connectDB()

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use('/', homeRoutes)
app.use('/playlist', playlistRoutes)

app.listen(process.env.PORT, ()=>{
    console.log('Server is running, you better catch it!')
})
