import { NextFunction, Request, Response } from "express";

export default function logRequest(req: Request, res: Response, next: NextFunction) {
    console.log(`Got a ${req.method} request to endpoint ${req.url}`);
    next();
}