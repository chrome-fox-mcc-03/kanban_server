if (process.env.NODE_ENV === 'development') {
    require('dotenv').config()
}

const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT;

const router = require('./routes/index')

app.use(express.json());
app.use(cors());
app.use(express.urlencoded( { extended: true } ) );

app.use("/", router)

app.listen(PORT, () => console.log("Server on port " + PORT))