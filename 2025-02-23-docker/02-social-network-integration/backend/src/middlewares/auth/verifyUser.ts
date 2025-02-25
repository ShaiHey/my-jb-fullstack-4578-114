import { NextFunction, Request, Response } from "express";
import AppError from "../../errors/app-error";
import status from "http-status";

export default function verifyUser(req: Request, res: Response, next: NextFunction) {
    if(req.userId) {
        next();
    } else {
        next(new AppError(
            status.UNAUTHORIZED,
            "Authentication Header Missing"
        ))
    }
}