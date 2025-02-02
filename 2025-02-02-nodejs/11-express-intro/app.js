const express = require('express');

const users = [
    { name: 'Alice', email: 'alice@example.com', age: 30 },
    { name: 'Bob', email: 'bob@example.com', age: 25 },
    { name: 'Charlie', email: 'charlie@example.com', age: 35 },
    { name: 'Diana', email: 'diana@example.com', age: 28 }
];

const list = `
    name,age,phone
    ido,23,55555
    mishel,23,44444
    daniel,32,33333
`

// Middleware is any function that gets (req, res, next)
const logRequest = (req, res, next) => {
    console.log(`Got a ${req.method} request to endpoint ${req.url}`);
    next();
}

const connectToMySQL = (req, res, next) => {
    console.log(`Connecting to mysql....`);
    next();
}

const disconnectFromMySQL = (req, res, next) => {
    console.log(`Disconnecting from mysql....`);
    next();
}

const connectToMongo = (req, res, next) => {
    console.log(`Connecting to mongo....`);
    next();
}

const printUser = (req, res, next) => {
    res.json(users) // After closing a response, i don't necessarily need a next
}

const addUser = (req, res, next) => {
    console.log("User added...");
    res.status(201);
    res.send('User added successfully');
}

const notFound = (req, res, next) => {
    res.status(404);
    res.send('The page u requested was not found on this server...');
}

const sendWelcomeEmail = (req, res, next) => {
    console.log('Sending a welcome email..');
    next();
}

const errorLogger = (err, req, res, next) => {
    console.log(`There was an error somewhere and this is it: ${err}`)
    next();
}

const pagerDuty = (err, req, res, next) => {
    console.log('Sending the SMS to the current TORAN')
}

const app = express();

app.use(logRequest);

app.use('/users', connectToMySQL);
app.get('/users', printUser);
app.post('/users', sendWelcomeEmail, addUser);
app.use('/users', disconnectFromMySQL);

app.use('/list', connectToMongo);

app.use(notFound);

app.use(errorLogger)
app.use(pagerDuty)

app.listen(3000, () => console.log('Express app started on port 3000...'));