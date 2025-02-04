import express, { NextFunction, Request, Response } from "express";

function getUser(req: Request, res: Response, next: NextFunction) {
    res.json({
        success: true
    })
}

const server = express();

server.use(getUser);

server.listen(3000, () => console.log('Server started on port 3000...'))