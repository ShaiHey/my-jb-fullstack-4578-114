import express, { json } from "express";
import config from "config";
import sequelize from "./db/sequelize";
import profileRouter from "./routers/profile";
import errorLogger from "./middlewares/error/error-logger";
import errorResponder from "./middlewares/error/error-responder";
import notFound from "./middlewares/not-found";
import followsRouter from "./routers/follows";
import commentsRouter from "./routers/comments";
import feedRouter from "./routers/feed";
import authRouter from "./routers/auth";

const port = config.get<number>('app.port');
const name = config.get<string>('app.name');
const force = config.get<boolean>('sequelize.sync.force')

const server = express();

(async() => {
    await sequelize.sync({ force })

    // Middlewares
    server.use(json())

    server.use('/profile', profileRouter)
    server.use('/follows', followsRouter)
    server.use('/comments', commentsRouter)
    server.use('/feed', feedRouter)
    server.use('/auth', authRouter)

    // Special notFound middleware
    server.use(notFound);

    // Error middleware
    server.use(errorLogger)
    server.use(errorResponder)

    server.listen(port, () => console.log(`Server ${name} started on port ${port}.....`));
})();