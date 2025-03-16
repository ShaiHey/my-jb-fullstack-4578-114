import express, { json } from "express";
import cors from "cors";
import config from "config";
import sequelize from "./db/sequelize";
import errorLogger from "./middlewares/error/error-logger";
import errorResponder from "./middlewares/error/error-responder";
import notFound from "./middlewares/not-found";
import logRequest from "./middlewares/log-request";
import genreRouter from "./routers/genre";
import bookRouter from "./routers/book";

const port = config.get<number>('app.port');
const name = config.get<string>('app.name');
const force = config.get<boolean>('sequelize.sync.force')

const server = express();

(async() => {
    await sequelize.sync({ force })

    // Middlewares
    server.use(cors());
    server.use(json())

    server.use(logRequest)
    
    // [ Here is the place to mount routers on the app ]
    server.use('/genres', genreRouter)
    server.use('/books', bookRouter)

    // Special notFound middleware
    server.use(notFound);

    // Error middleware
    server.use(errorLogger)
    server.use(errorResponder)

    server.listen(port, () => console.log(`Server ${name} started on port ${port}.....`));
})();