const express = require('express');
const axios = require('axios');
const fs = require('fs/promises');
const app = express();

const getData = async url => {
    const response = await axios.get(url);
    return response.data;
}

const logRequest = (req, res, next) => {
    console.log(`Got a ${req.method} request to endpoint ${req.url}`);
    next();
}

const notFound = (req, res, next) => {
    res.status(404);
    res.send('Page not found..');
}

const errorLogger = async (err, req, res, next) => {
    await fs.appendFile('errorLog.txt', `${new Date().toISOString()} - ${err}\n`);
    next();
}

const getUsers = async (req, res, next) => {
    const users = await getData('https://jsonplaceholder.typicode.com/users');
    res.json(users);
}

const getUser = async (req, res, next) => {
    const userId = req.query.id;
    if(userId) {
        const user = await getData(`https://jsonplaceholder.typicode.com/users/${userId}`);
        res.json(user);
    } else {
        res.send('User not define');
    }
}

const testBug = async (req, res, next) => {
    try {
        const user = await getData('https://jsonplaceholder.typicode.com/us');
        res.json(user);
    } catch (err) {
        next(err);
    }
}

app.use(logRequest);
app.get('/users', getUsers)
app.get('/user', getUser)
app.get('/bug', testBug)

app.use(notFound);
app.use(errorLogger);

app.listen(3000, () => console.log(`Express server started on port 3000...`));