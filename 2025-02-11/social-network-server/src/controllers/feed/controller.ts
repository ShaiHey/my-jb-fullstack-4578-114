import { NextFunction, Request, Response } from "express";
import User from "../../models/user";
import Post from "../../models/post";
import postIncludes from '../common/post-includes'
import sequelize from "../../db/sequelize";

export async function getFeed(req: Request, res: Response, next: NextFunction) {
    try {
        const userId = '1230ae30-dc4f-4752-bd84-092956f5c633'

        const user = await User.findByPk(userId, {
            include: [{
                model: User,
                as: "following",
                include: [{
                    model: Post,
                    ...postIncludes
                }]
            }]
        })

        const feed = user.following.reduce((acc: Post[], { posts }) => {
            return [...acc, ...posts]
        }, []).sort((a: Post, b: Post) => a.createdAt < b.createdAt ? 1 : -1)

        res.json(feed)

        // Example how to do the same with RAW QUERY using sequelize:
        // const feed = await sequelize.query(`
        //     SELECT
        //         posts.*
        //     FROM
        //         posts
        //     JOIN follows ON follows
        //         .followee_id = posts.user_id AND follows.follower_id = ?
        // `, {
        //     replacements: [ userId ],
        //     model: Post
        // })

        // await Promise.all(feed.map(post => post.reload({...postIncludes})));

        // res.json(feed)
    } catch (error) {
        next(error)
    }
}