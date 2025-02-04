const express = require('express');
const { usersRouter } = require('./users-router');
const { listRouter } = require('./list-router');

// Middleware is any function that gets (req, res, next)
const logRequest = (req, res, next) => {
    console.log(`Got a ${req.method} request to endpoint ${req.url}`);
    next();
}

const notFound = (req, res, next) => {
    res.status(404);
    res.send('The page u requested was not found on this server...');
}

const errorLogger = (err, req, res, next) => {
    console.log(`There was an error somewhere and this is it: ${err}`)
    next(err);
}

const pagerDuty = (err, req, res, next) => {
    console.log('Sending the SMS to the current TORAN')
    next(err)
}

const errorResponder = (err, req, res, next) => {
    res.status(err.statusCode || 500).send(err.message || 'Internal server error')
}

const app = express();

app.use(logRequest);

app.use('/users', usersRouter)
app.use('/list', listRouter);

app.use(notFound);

app.use(errorLogger)
app.use(pagerDuty)
app.use(errorResponder)

app.listen(3000, () => console.log('Express app started on port 3000...'));