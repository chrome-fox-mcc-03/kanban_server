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

app.use(cors())
app.use(express.urlencoded({extended:false}))
app.use(express.json())
app.use(router)
app.use(errorHandler)

app.listen(PORT, () => console.log(`You are now listening to port`, PORT))