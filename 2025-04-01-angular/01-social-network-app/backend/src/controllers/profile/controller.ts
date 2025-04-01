import { NextFunction, Request, Response } from "express";
import RequestParams from "../../models/request-params";
import AppError from "../../errors/app-error";
import status from "http-status";
import socket from "../../io/io";
import SocketMessages from "socket-enums-shaihey";
import { PostModel } from "../../models/post";

export async function getProfile(req: Request, res: Response, next: NextFunction) {
    try {
        const userId = req.userId

        const profile = await PostModel.find({ userId }).populate(['user', 'comments.user']);

        res.json(profile.map(doc => doc.toObject()));
    } catch (error) {
        next(error)
    }
}

export async function getPost(req: Request<RequestParams>, res: Response, next: NextFunction) {
    try {
        const postId = req.params.id
        const post = await PostModel.findById(postId)
        res.json(post?.toObject())
    } catch (error) {
        next(error)
    }
}

export async function deletePost(req: Request<RequestParams>, res: Response, next: NextFunction) {
    try {
        const _id = req.params.id
        const deleteResponse = await PostModel.deleteOne({ _id })

        if(deleteResponse.deletedCount === 0) return next(new AppError(
            status.NOT_FOUND,
            "The post you were trying to delete does not exist"
        ))

        res.json({
            success: true
        })
    } catch (error) {
        next(error)
    }
}

export async function createPost(req: Request, res: Response, next: NextFunction) {
    try {
        const userId = req.userId
        let createParams = { ...req.body, userId, user: userId, createdAt: new Date() }

        if(req.imageUrl) {
            const imageUrl = req.imageUrl
            createParams = {...createParams, imageUrl}
        }

        const post = new PostModel(createParams)
        await post.save()
        res.json(post.toObject())

        socket.emit(SocketMessages.NEW_POST, {
            from: req.headers['x-client-id'],
            data: post
        })
    } catch (error) {
        next(error)
    }
}

export async function updatePost(req: Request<RequestParams>, res: Response, next: NextFunction) {
    try {
        const post = await PostModel.findById(req.params.id)

        const { title, body } = req.body
        post.title = title
        post.body = body
        await post.save()

        res.json(post.toObject())
    } catch (error) {
        next(error)
    }
}