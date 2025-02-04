const express = require('express');

const connectToMongo = (req, res, next) => {
    console.log(`Connecting to mongo....`);
    next();
}

const listRouter = express.Router();

listRouter.use(connectToMongo);

module.exports = { listRouter }