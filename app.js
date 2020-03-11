require('dotenv').config()

const express = require('express');
const app = express();
const PORT = process.env.PORT;
const router = require('./routes/index');

app.use(express.urlencoded({ extended: false }));
app.use(router);

app.listen(+PORT, () => {
    console.log('connected to port', +PORT);
})