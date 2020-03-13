if(process.env.NODE_ENV === "development") {
  require('dotenv').config()
}

const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000;
const router = require('./routes/index')
// const errorHandler
const cors = require('cors')

app.use(cors())
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(router)

app.listen(PORT, () => {
console.log(`listen on port ${PORT}`);
})