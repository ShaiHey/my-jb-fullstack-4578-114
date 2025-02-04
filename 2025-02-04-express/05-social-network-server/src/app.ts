import express from "express";
import config from "config";
import sequelize from "./db/sequelize";

const port = config.get<number>('app.port');
const name = config.get<string>('app.name');

const server = express();

sequelize.sync()

server.listen(port, () => console.log(`Server ${name} started on port ${port}.....`));