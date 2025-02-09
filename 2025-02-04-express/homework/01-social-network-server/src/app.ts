import express from "express";
import config from "config";
import sequelize from "./db/sequelize";

const port = config.get<number>('app.port');
const name = config.get<string>('app.name');

const server = express();

const force = config.get<boolean>('sequelize.sync.force')
sequelize.sync({ force })

server.listen(port, () => console.log(`Server ${name} started on port ${port}.....`));