import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import config from "config";
import AppError from "../../errors/app-error";
import status from "http-status";

declare global {
    namespace Express {
        interface Request {
            userId: string;
        }
    }
}

export default function authJwt(req: Request, res: Response, next: NextFunction) {
    if(req.token) {
        try {
            const user = verify(req.token, config.get('app.jwtSecret')) as {id: string}
            
            req.userId = user.id
        } catch (error) {
            next(new AppError(status.UNAUTHORIZED, 'Invalid JWT'))
        }
    }
    next();
}