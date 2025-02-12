import { NextFunction, Request, Response } from "express";
import TwitterError from "../errors/twitter-error";

export default function notFound(req: Request, res: Response, next: NextFunction) {
    next(new TwitterError(
        404,
        "Not found"
    ))
}