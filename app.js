const express = require('express');
const bodyParser = require('body-parser');

const cityRouter = require('./routers/cityRouter');
const productRouter = require('./routers/productRouter');
const userRouter = require('./routers/userRouter');

const db = require('./db');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/api/cities', cityRouter);
app.use('/api/products', productRouter);
app.use('/api/users', userRouter);

app.get('/', (req, res) => res.send('Piu-piu'));

module.exports = app;