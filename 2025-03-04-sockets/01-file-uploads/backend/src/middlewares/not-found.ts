import { NextFunction, Request, Response } from "express";
import AppError from "../errors/app-error";
import status from "http-status";

export default function notFound(req: Request, res: Response, next: NextFunction) {
    next(new AppError(
        status.NOT_FOUND,
        "Not found"
    ))
}