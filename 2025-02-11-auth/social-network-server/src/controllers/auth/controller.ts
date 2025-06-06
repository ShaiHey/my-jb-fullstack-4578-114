import { NextFunction, Request, Response } from "express";
import User from "../../models/user";
import { createHmac } from "crypto";
import config from "config";
import { sign } from "jsonwebtoken";
import TwitterError from "../../errors/twitter-error";

function hashPassword(password: string): string {
    return createHmac('sha256', config.get<string>('app.secret'))
        .update(password)
        .digest('hex')
}

export async function login(req: Request, res: Response, next: NextFunction) {
    try {
        const { username, password } = req.body

        const user = await User.findOne({
            where: {
                username,
                password: hashPassword(password)
            }
        })

        if(!user) return next(new TwitterError(
            401,
           'Wrong credentials'
        ))

        const jwt = sign(user.get({ plain: true }), config.get<string>('app.jwtSecret'))

        res.json({ jwt })
    } catch (error) {
        next(error)
    }
}

export async function signUp(req: Request, res: Response, next: NextFunction) {
    const { name, username, password } = req.body
    try {

        const user = await User.create({
            name,
            username,
            password: hashPassword(password)
        })

        const jwt = sign(user.get({ plain: true }), config.get<string>('app.jwtSecret'))

        res.json({ jwt })
    } catch (error) {
        if(error.name === "SequelizeUniqueConstraintError") return next(new TwitterError(
            409,
            `Username ${username} already exists. Please choose another username`
        ))
        next(error)
    }
}