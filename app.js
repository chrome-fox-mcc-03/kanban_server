require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.PORT
const errorHandler = require('./middleware/errorHandler')
const router =require('./routes')

app.use(express.urlencoded({extended:false}))
app.use(express.json())
app.use(cors())
app.use(router)
app.use(errorHandler)

app.listen(port, () => {
  console.log('connected ' + port)
})