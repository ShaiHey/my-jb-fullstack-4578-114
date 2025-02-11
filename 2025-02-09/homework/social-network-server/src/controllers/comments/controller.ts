import { NextFunction, Request, Response } from "express";
import Comment from "../../models/comment";
import User from "../../models/user";
import RequestParams from "../../models/request-params";

export async function createComment(req: Request<RequestParams>, res: Response, next: NextFunction) {
    try {
        const userId = '1230ae30-dc4f-4752-bd84-092956f5c633'
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