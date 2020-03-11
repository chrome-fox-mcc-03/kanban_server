require('dotenv').config()

const express = require('express');
const app = express();
const PORT = process.env.PORT;

app.use(express.urlencoded({ extended: false }))

app.listen(+PORT, () => {
    console.log('connected to port', +PORT);
})