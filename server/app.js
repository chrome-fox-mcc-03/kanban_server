if (process.env.NODE_ENV === "development") require('dotenv').config()
const cors = require('cors')
const express = require('express')
const app = express()
const port = process.env.PORT
const index = require("./routes/index")
const errorHandler = require('./middlewares/errorHandler')

app.use(express.urlencoded({ extended:false }))
app.use(express.json())
app.use(cors())
app.use(index)
app.use(errorHandler)


app.listen(port, _ => console.log(`Servermu harga Rp.${port} bang`))