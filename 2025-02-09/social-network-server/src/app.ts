import express from "express";
import config from "config";
import sequelize from "./db/sequelize";
import profileRouter from "./routers/profile";
import errorLogger from "./middlewares/error/error-logger";
import errorResponder from "./middlewares/error/error-responder";
import notFound from "./middlewares/not-found";

const port = config.get<number>('app.port');
const name = config.get<string>('app.name');
const force = config.get<boolean>('sequelize.sync.force')

const server = express();

(async() => {
    await sequelize.sync({ force })

    // Middlewares
    server.use('/profile', profileRouter)

    // Special notFound middleware
    server.use(notFound);

    // Error middleware
    server.use(errorLogger)
    server.use(errorResponder)

    server.listen(port, () => console.log(`Server ${name} started on port ${port}.....`));
})();