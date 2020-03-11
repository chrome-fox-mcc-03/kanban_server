if (process.env.NODE_ENV === 'development') {
  require('dotenv').config();
};

const express = require('express');
const app = express();
const cors = require('cors');
const PORT = process.env.PORT || 3000;
const routes = require('./router');
const errorHandler = require('./middlewares/error-handler');

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(routes);
app.use(errorHandler);

app.listen(PORT, _=> {
  console.log(`Connected to port ${PORT}`);
});