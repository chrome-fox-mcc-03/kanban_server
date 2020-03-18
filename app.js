if(process.env.NODE_ENV === 'development') {
    require('dotenv').config()
}
// console.log(process.env)
// require('dotenv').config()
const express = require('express');
const app = express();
const routers = require('./routes/index.js')
const errorHandler = require('./middlewares/errorHandler.js')
const cors = require('cors')

app.use(cors())
app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.use(routers)
app.use(errorHandler)

app.listen(process.env.PORT, () => console.log(`Port ${process.env.PORT} is good to go!`))
