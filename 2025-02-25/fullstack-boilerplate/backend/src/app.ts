import express, { json } from "express";
import cors from "cors";
import config from "config";
import sequelize from "./db/sequelize";
import errorLogger from "./middlewares/error/error-logger";
import errorResponder from "./middlewares/error/error-responder";
import notFound from "./middlewares/not-found";
// import authRouter from "./routers/auth";
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
    server.use(cors());
    server.use(json())

    server.use(logRequest)

    // [ If we have auth in this app, uncomment this ]
    // server.use('/auth', authRouter)
    // server.use(bearerToken());
    // server.use(authJwt, verifyUser)
    
    // [ Here is the place to mount routers on the app ]
    server.use('/profile', profileRouter)

    // Special notFound middleware
    server.use(notFound);

    // Error middleware
    server.use(errorLogger)
    server.use(errorResponder)

    server.listen(port, () => console.log(`Server ${name} started on port ${port}.....`));
})();