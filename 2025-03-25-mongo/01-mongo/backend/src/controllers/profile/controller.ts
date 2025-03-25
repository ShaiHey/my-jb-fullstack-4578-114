import { NextFunction, Request, Response } from "express";
import RequestParams from "../../models/request-params";
import AppError from "../../errors/app-error";
import status from "http-status";
import socket from "../../io/io";
import SocketMessages from "socket-enums-shaihey";

export async function getProfile(req: Request, res: Response, next: NextFunction) {
    try {
        // const userId = req.userId

        // const user = await User.findByPk(userId, {
        //     include: [
        //         {
        //             model: Post,
        //             ...postIncludes
        //         }
        //     ]
        // });
        // res.json(user.posts);
    } catch (error) {
        next(error)
    }
}

export async function getPost(req: Request<RequestParams>, res: Response, next: NextFunction) {
    try {
        // const postId = req.params.id
        // const post = await Post.findByPk(postId, postIncludes)
        // res.json(post)
    } catch (error) {
        next(error)
    }
}

export async function deletePost(req: Request<RequestParams>, res: Response, next: NextFunction) {
    try {
        // const id = req.params.id

        // // const post = await Post.findByPk(id)
        // // await post.destroy()

        // const deletedRows = await Post.destroy({
        //     where: { id }
        // })

        // if(deletedRows === 0) return next(new AppError(
        //     status.NOT_FOUND,
        //     "The post you were trying to delete does not exist"
        // ))

        // res.json({
        //     success: true
        // })
        
    } catch (error) {
        next(error)
    }
}

export async function createPost(req: Request, res: Response, next: NextFunction) {
    try {
        // const userId = req.userId
        // let createParams = { ...req.body, userId }

        // if(req.imageUrl) {
        //     const imageUrl = req.imageUrl
        //     createParams = {...createParams, imageUrl}
        // }

        // const post = await Post.create(createParams);
        // await post.reload(postIncludes)
        // res.json(post)
        
        // socket.emit(SocketMessages.NEW_POST, {
        //     from: req.headers['x-client-id'],
        //     data: post
        // })
    } catch (error) {
        next(error)
    }
}

export async function updatePost(req: Request<RequestParams>, res: Response, next: NextFunction) {
    try {
        // const post = await Post.findByPk(req.params.id, postIncludes)
        // const { title, body } = req.body
        // post.title = title
        // post.body = body
        // await post.save()
        // res.json(post)
    } catch (error) {
        next(error)
    }
}