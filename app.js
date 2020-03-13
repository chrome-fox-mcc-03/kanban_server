if (process.env.NODE_ENV == 'development') {
    require('dotenv').config()
}
const express = require('express')
const app = express()
const routes = require('./routes/index')
const cors = require('cors')
const errorHandler = require('./middlewares/errorHandler')


app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(routes)
app.use(errorHandler)

app.listen(process.env.PORT, () => console.log(`i love you ${process.env.PORT}`))