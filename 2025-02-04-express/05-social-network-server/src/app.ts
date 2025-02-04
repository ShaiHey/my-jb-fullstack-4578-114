import express from "express";
import config from "config";

const port = config.get<number>('app.port');
const name = config.get<string>('app.name');

const server = express();

server.listen(port, () => console.log(`Server ${name} started on port ${port}.....`));