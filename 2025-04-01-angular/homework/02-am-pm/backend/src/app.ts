import cors from "cors";
import express, { json } from "express";
import { connectToMongo } from "./db/mongoose";
import errorLogger from "./middlewares/error/error-logger";
import errorResponder from "./middlewares/error/error-responder";
import logRequest from "./middlewares/log-request";
import notFound from "./middlewares/not-found";
import productsRouter from "./routers/products";

export const server = express();

export async function start() {
    await connectToMongo();

    // Middlewares
    server.use(cors());
    server.use(json());

    server.use(logRequest);

    // Router
    server.use('/', productsRouter);

    // Special notFound middleware
    server.use(notFound);

    // Error middleware
    server.use(errorLogger);
    server.use(errorResponder);
}