import { NextFunction, Request, Response } from "express";
import RequestParams from "../../models/request-params";
import socket from "../../io/io";
import SocketMessages from "socket-enums-shaihey";

export async function createComment(req: Request<RequestParams>, res: Response, next: NextFunction) {
    try {
        // const userId = req.userId
        // const postId = req.params.id
        
        // const newComment = await Comment.create({
        //     postId,
        //     userId,
        //     ...req.body
        // })

        // await newComment.reload({
        //     include: [ User ]
        // })

        // res.json(newComment);

        // socket.emit(SocketMessages.NEW_COMMENT, {
        //     from: req.headers['x-client-id'],
        //     data: newComment
        // })
    } catch (error) {
        next(error)
    }
}