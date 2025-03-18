import { NextFunction, Request, Response } from "express";
import AppError from "../../errors/app-error";
import status from "http-status";

export default function errorResponder(err: Error, req: Request, res: Response, next: NextFunction) {
    if(err instanceof AppError) {
        res.status(err.status).send(err.message)
    } else {
        res.status(status.INTERNAL_SERVER_ERROR).send(err.message)
    }
}