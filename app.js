if (process.env.NODE_ENV === 'development') {
	require('dotenv').config();
}

const express = require('express');

const app = express();

// app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(process.env.NODE_ENV, () => console.log(`this app running on port ${process.env.PORT}`));