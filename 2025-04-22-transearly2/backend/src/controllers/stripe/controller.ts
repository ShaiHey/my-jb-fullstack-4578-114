import config from "config";
import { NextFunction, Request, Response } from "express";
import Stripe from 'stripe';
import { UserModel } from "../../models/user";

export async function createPaymentIntent(req: Request, res: Response, next: NextFunction) {
    const clientSecret = config.get<string>('stripe.secret');
    try {
        const stripe = new Stripe(clientSecret)

        const paymentIntent = await stripe.paymentIntents.create({
            amount: 10000,
            currency: 'usd',
            automatic_payment_methods: {
              enabled: true,
            },
        })

        res.json({
            paymentIntent,
            clientSecret
        })
    } catch (error) {
        next(error)
    }
}


export async function updateUserPaymentIntent(req: Request, res: Response, next: NextFunction) {
    try {
        const user = await UserModel.findById(req.params.userId);
        user.paymentIntent = req.params.paymentIntentId
        await user.save()

        res.json(user)
    } catch (error) {
        next(error)
    }
}