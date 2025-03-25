import { NextFunction, Request, Response } from "express";
import RequestParams from "../../models/request-params";
import { UserModel } from "../../models/user";

export async function getFollowers(req: Request, res: Response, next: NextFunction) {
    try {
        const userId = req.userId

        const followers = await UserModel.find({
            following: {
                $in: userId
            }
        })

        res.json(followers.map(doc => doc.toObject()));
    } catch (error) {
        next(error)
    }
}

export async function getFollowing(req: Request, res: Response, next: NextFunction) {
    try {
        const userId = req.userId
        const user = await UserModel.findById(userId)
        res.json(user.following)
    } catch (error) {
        next(error)
    }
}

export async function follow(req: Request<RequestParams>, res: Response, next: NextFunction) {
    try {
        const followerId = req.userId

        // fetch and update
        // const user = await UserModel.findById(followerId);
        // user.following.push(req.params.id)
        // await user.save()

        await UserModel.findOneAndUpdate({
            _id: followerId
        }, {
            $push: {
                following: req.params.id
            }
        }, {
            new: true
        })

        res.json({ success: true });
    } catch (error) {
        next(error)
    }
}

export async function unfollow(req: Request<RequestParams>, res: Response, next: NextFunction) {
    try {
        const followerId = req.userId

        // fetch and update
        // const user = await UserModel.findById(followerId);
        // user.following = user.following.filter(followId => followId !== req.params.id)
        // await user.save()

        await UserModel.findOneAndUpdate({
            _id: followerId
        }, {
            $pull: {
                following: req.params.id
            }
        }, {
            new: true
        })

        res.json({ success: true });
    } catch (error) {
        next(error)
    }
}