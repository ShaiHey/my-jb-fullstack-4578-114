import express, { json } from "express";
import cors from "cors";
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
import bearerToken from "express-bearer-token";
import authJwt from "./middlewares/auth/getUser";
import verifyUser from "./middlewares/auth/verifyUser";
import logRequest from "./middlewares/log-request";

const port = config.get<number>('app.port');
const name = config.get<string>('app.name');
const force = config.get<boolean>('sequelize.sync.force')

const server = express();

(async() => {
    await sequelize.sync({ force })

    // Middlewares
    // server.use(cors());
    server.use(json())

    // server.use(logRequest)
    server.use('/auth', authRouter)

    server.use(bearerToken());
    server.use(authJwt, verifyUser)
    
    server.use('/profile', profileRouter)
    server.use('/follows', followsRouter)
    server.use('/comments', commentsRouter)
    server.use('/feed', feedRouter)

    // Special notFound middleware
    server.use(notFound);

    // Error middleware
    server.use(errorLogger)
    server.use(errorResponder)

    server.listen(port, () => console.log(`Server ${name} started on port ${port}.....`));
})();