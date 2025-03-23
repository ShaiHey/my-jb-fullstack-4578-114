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
import fileUpload from "express-fileupload";
import { createAppBucketIfNotExist } from "./aws/s3";
import { createAppQueueIfNotExist } from "./aws/sqs";

const force = config.get<boolean>('sequelize.sync.force');

export const server = express();

export async function start() {
    await sequelize.sync({ force });
    
    await createAppBucketIfNotExist();
    await createAppQueueIfNotExist();

    // Middlewares
    server.use(cors());
    server.use(json());
    server.use(fileUpload());

    server.use(logRequest);
    server.use('/auth', authRouter);

    server.use(bearerToken());
    server.use(authJwt, verifyUser);
    
    server.use('/profile', profileRouter);
    server.use('/follows', followsRouter);
    server.use('/comments', commentsRouter);
    server.use('/feed', feedRouter);

    // Special notFound middleware
    server.use(notFound);

    // Error middleware
    server.use(errorLogger);
    server.use(errorResponder);
}