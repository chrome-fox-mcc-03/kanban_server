if(process.env.NODE_ENV === "development") {
    require('dotenv').config()
}

const cors = require('cors');
const express = require('express');
const app = express();
const http = require('http').createServer(app)
const io = require('socket.io')(http);
const router = require('./routers/index');
const errorHandler = require('./middlewares/errorHandler')


app.use(cors());
app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.use(router);
app.use(errorHandler)

// app.listen(process.env.PORT, () => console.log(`Hi there! You're listening to port ${process.env.PORT}`)); 

io.on('connection', (socket) => {
    socket.on("changingTask", _ => {
        io.emit("changesOnTask")
    })
})    
http.listen(process.env.PORT, _ => {
    console.log(`Hi there! You're listening to port ${process.env.PORT}`)
});