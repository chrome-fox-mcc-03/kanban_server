"use strict"

if(process.env.NODE_ENV === 'development'){
    require('dotenv').config()
}

const express = require('express')
const app = express()
const cors = require('cors')
const router = require('./routes/index.js')
const errorHandler = require('./middleware/errorHandler')
const PORT = process.env.PORT
const server = app.listen(3001)
const io = require("socket.io")(server)

app.use(cors())
app.use(express.urlencoded({extended:false}))
app.use(express.json())
app.use(router)
app.use(errorHandler)
io.on('connection', function(socket){
    console.log('New user has arrived')
    socket.on('new_task', function(){
        io.emit('new_card_arrived')
    })
})

app.listen(PORT, () => console.log(`You are now listening to port`, PORT))