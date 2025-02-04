const express = require('express');

const users = [
    { name: 'Alice', email: 'alice@example.com', age: 30 },
    { name: 'Bob', email: 'bob@example.com', age: 25 },
    { name: 'Charlie', email: 'charlie@example.com', age: 35 },
    { name: 'Diana', email: 'diana@example.com', age: 28 }
];

const connectToMySQL = (req, res, next) => {
    console.log('Connecting to mysql...')
    if (Math.random() > 0.5 ) next ('there was an error connecting to the database')
    else next();
}

const disconnectFromMySQL = (req, res, next) => {
    console.log(`Disconnecting from mysql....`);
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

const sendWelcomeEmail = (req, res, next) => {
    console.log('Sending a welcome email..');
    next();
}

const usersRouter = express.Router()

usersRouter.use(connectToMySQL);
usersRouter.get('/', printUser);
usersRouter.post('/', sendWelcomeEmail, addUser);
usersRouter.use(disconnectFromMySQL);

module.exports = { usersRouter }