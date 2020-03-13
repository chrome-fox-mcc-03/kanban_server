if (process.env.NODE_ENV === 'development') {
	require('dotenv').config();
}

const express = require('express');
const cors = require('cors')
const morgan = require('morgan');
const router = require('./routes');

const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(router);

app.listen(process.env.PORT, () => console.log(`this app running on port ${process.env.PORT}`));