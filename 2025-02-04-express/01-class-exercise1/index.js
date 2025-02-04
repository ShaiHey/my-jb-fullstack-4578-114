const express = require('express');
const axios = require('axios');
const parser = require('json-xml-parse');

const server = express();

// Naive way...
// const getUsers = async (req, res, next) => {
//     const response = await axios('https://jsonplaceholder.typicode.com/users');
//     const users = response.data;
//     const search = req.query.search;
//     const format = req.query.format;
//     switch (format) {
//         case 'xml':
//             res.type('text/xml');
//             res.send(search ? parser.jsXml.toXmlString(users.filter(user => user.name.includes(search))) : parser.jsXml.toXmlString(users));
//         break;
    
//         default:
//             res.json(search ? users.filter(user => user.name.includes(search)) : users)
//         break;
//     }
// }

// server.get('/users', getUsers);

// Modular way
const getUsers = async (req, res, next) => {
    try {
        const response = await axios('https://jsonplaceholder.typicode.com/users');
        req.users = response.data;
        next();
    } catch (error) {
        next(error)
    }
}

const filterData = (req, res, next) => {
    if(req.query.search) {
        req.users = req.users.filter(({name}) => name.includes(req.query.search))
    }
    next();
}

const respond = (req, res, next) => {
    if(req.query.format === 'xml') {
        res.type('text/xml');
        return res.send(parser.jsXml.toXmlString(req.users))
    }
    res.json(req.users)
}

const errorHandler = (err, req, res, next) => {
    res.status(500).send(err.toString());
}

server.get('/users', getUsers, filterData, respond, errorHandler);

server.listen(3000, () => console.log('Server started on port 3000....'));