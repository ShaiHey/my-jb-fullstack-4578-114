import { NextFunction, Request, Response } from "express";
import User from "../../models/user";
import Follow from "../../models/follow";
import RequestParams from "../../models/request-params";

export async function getFollowers(req: Request, res: Response, next: NextFunction) {
    try {
        const userId = '1230ae30-dc4f-4752-bd84-092956f5c633'

        const user = await User.findByPk(userId, {
            include: [{
                model: User,
                as: 'followers'
            }]
        })

        res.json(user.followers)
    } catch (error) {
        next(error)
    }
}

export async function getFollowing(req: Request, res: Response, next: NextFunction) {
    try {
        const userId = '1230ae30-dc4f-4752-bd84-092956f5c633'

        const user = await User.findByPk(userId, {
            include: [{
                model: User,
                as: 'following'
            }]
        })
        res.json(user.following)
    } catch (error) {
        next(error)
    }
}

export async function follow(req: Request<RequestParams>, res: Response, next: NextFunction) {
    try {
        const followerId = '1230ae30-dc4f-4752-bd84-092956f5c633'

        const follow = await Follow.create({
            followerId,
            followeeId: req.params.id
        })

        res.json(follow)
        // const follower = await User.findByPk(req.params.id)

        // res.json(follower)
    } catch (error) {
        next(error)
    }
}

export async function unfollow(req: Request<RequestParams>, res: Response, next: NextFunction) {
    try {
        const followerId = '1230ae30-dc4f-4752-bd84-092956f5c633'
        
        const isUnfollowed = await Follow.destroy({
            where: {
                followerId,
                followeeId: req.params.id
            }
        })

        if(isUnfollowed === 0) return next({
            status: 404,
            message: "Tried to delete unexciting record"
        });
        
        res.json({ success: true });
    } catch (error) {
        next(error)
    }
}