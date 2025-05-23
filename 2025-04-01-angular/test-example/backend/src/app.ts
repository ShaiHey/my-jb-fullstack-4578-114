import cors from "cors";
import express, { json } from "express";
import { connectToMongo } from "./db/mongoose";
import errorLogger from "./middlewares/error/error-logger";
import errorResponder from "./middlewares/error/error-responder";
import logRequest from "./middlewares/log-request";
import notFound from "./middlewares/not-found";
import furnituresRouter from "./routers/furnitures";

export const server = express();

export async function start() {
    await connectToMongo();

    // Middlewares
    server.use(cors());
    server.use(json());

    server.use(logRequest);

    // Router
    server.use('/', furnituresRouter);

    // Special notFound middleware
    server.use(notFound);

    // Error middleware
    server.use(errorLogger);
    server.use(errorResponder);
}