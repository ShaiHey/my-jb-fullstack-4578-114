import { NextFunction, Request, Response } from "express";
import User from "../../models/user";
import Post from "../../models/post";
import Comment from "../../models/comment";

export async function getProfile(req: Request, res: Response, next: NextFunction) {
    try {
        const userId = '1230ae30-dc4f-4752-bd84-092956f5c633'

        const user = await User.findByPk(userId, {
            include: [
                {
                    model: Post,
                    include: [
                        {
                            model: Comment,
                            include: [ User ]
                        }
                        , User
                    ]
                }
            ]
        });
        res.json(user.posts);
    } catch (error) {
        next(error)
    }
}

export async function getPost(req: Request, res: Response, next: NextFunction) {
    try {
        const postId = req.params.id
        const post = await Post.findByPk(postId, {
            include: [
                {
                    model: Comment,
                    include: [ User ]
                },
                User
            ]
        })
        res.json(post)
    } catch (error) {
        next(error)
    }
}

export async function deletePost(req: Request, res: Response, next: NextFunction) {
    try {
        const id = req.params.id

        // const post = await Post.findByPk(id)
        // await post.destroy()

        const deletedRows = await Post.destroy({
            where: { id }
        })

        if(deletedRows === 0) return next({
            status: 404,
            message: "The post you were trying to delete does not exist"
        })

        res.json({
            success: true
        })
        
    } catch (error) {
        next(error)
    }
}

export async function createPost(req: Request, res: Response, next: NextFunction) {
    try {
        const userId = '1230ae30-dc4f-4752-bd84-092956f5c633'
        const post = await Post.create({
            ...req.body,
            userId
        });
        res.json(post)
    } catch (error) {
        next(error)
    }
}