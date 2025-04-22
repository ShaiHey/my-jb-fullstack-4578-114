import { NextFunction, Request, Response } from "express";

export default function dropboxWebhookVerify(req: Request, res: Response, next: NextFunction) {
    if(req.headers['x-dropbox-signature']) next();
}