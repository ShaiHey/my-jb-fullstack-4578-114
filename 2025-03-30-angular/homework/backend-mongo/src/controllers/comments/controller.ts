import { NextFunction, Request, Response } from "express";
import RequestParams from "../../models/request-params";
import socket from "../../io/io";
import SocketMessages from "socket-enums-shaihey";
import { PostModel } from "../../models/post";

export async function createComment(req: Request<RequestParams, {}, {body: string}>, res: Response, next: NextFunction) {
    try {
        const userId = req.userId
        const postId = req.params.id
        
        
        const newComment = await PostModel.findByIdAndUpdate(postId, {
            $push: {
                comments: {...req.body, userId, user: userId, createdAt: new Date()}
            }
        }, {
            new: true
        })

        res.json(newComment.toObject());

        // socket.emit(SocketMessages.NEW_COMMENT, {
        //     from: req.headers['x-client-id'],
        //     data: newComment
        // })
    } catch (error) {
        next(error)
    }
}

export async function deleteComment(req: Request<{postId: string, commentId: string}>, res: Response, next: NextFunction) {
    try {
        const userId = req.userId
        const postId = req.params.postId
        const _id = req.params.commentId
        
        await PostModel.findByIdAndUpdate(postId, {
            $pull: {
                comments: {_id, userId}
            }
        }, {
            new: true
        })

        res.json({
            success: true
        });
    } catch (error) {
        next(error)
    }
}