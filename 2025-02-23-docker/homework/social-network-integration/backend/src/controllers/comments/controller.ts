import { NextFunction, Request, Response } from "express";
import Comment from "../../models/comment";
import User from "../../models/user";
import RequestParams from "../../models/request-params";

export async function createComment(req: Request<RequestParams>, res: Response, next: NextFunction) {
    try {
        const userId = req.userId
        const postId = req.params.id
        
        const newComment = await Comment.create({
            postId,
            userId,
            ...req.body
        })

        await newComment.reload({
            include: [ User ]
        })

        res.json(newComment);
    } catch (error) {
        next(error)
    }
}