if(process.env.NODE_ENV === 'development'){
    require('dotenv').config()
}

const express = require('express')
const app = express()
const cors = require('cors')
const routes = require('./routes/index')
const { errorHandler } = require('./middlewares/errorHandler')

app.use(express.urlencoded({ extended : false }))
app.use(express.json())
app.use(cors())
app.use(routes)
app.use(errorHandler)


const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    console.log(`listening to : ${PORT}`);
})