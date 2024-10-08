const express = require('express');
const morgan = require('morgan');

const toursRouter = require('./routes/tourRoutes');
const usersRouter = require('./routes/userRoutes');

const app = express();

if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}
app.use(express.json());



app.use('/api/v1/tours', toursRouter);
app.use('/api/v1/users', usersRouter);

module.exports = app;