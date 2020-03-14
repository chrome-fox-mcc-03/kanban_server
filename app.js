if(process.env.NODE_ENV === 'development') {
    require('dotenv').config()
}
const express = require('express')
const cors = require('cors')
const app = express()
const router = require('./routes')
const errorHandler = require('./middlewares/errorHandler')
var http = require('http').createServer(app)
const io = require('socket.io')(http)


app.use(cors())
app.use(express.urlencoded({extended: false}))
app.use(express.json())

app.use(router)

app.use(errorHandler)
io.on('connection', function(socket) {
    console.log('User Connected')
    socket.on('new_task', function() {
        io.emit('new_task_arrived')
    })
})
http.listen(process.env.PORT, () => console.log('listening to port: ' + process.env.PORT))
