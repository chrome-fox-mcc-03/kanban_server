if (process.env.NODE_ENV == 'development') {
    require('dotenv').config()
}
const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000
const router = require('./routes/indexRouter')


app.use(express.urlencoded({
    extended: false
}))
app.use(router)

app.listen(PORT, () => {
    console.log(`Run ${PORT}`);

})