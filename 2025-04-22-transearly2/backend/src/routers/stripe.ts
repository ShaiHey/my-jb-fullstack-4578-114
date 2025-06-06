import { Router } from "express";
import { checkIfUserPay, createPaymentIntent, updateUserPaymentIntent } from "../controllers/stripe/controller";

const stripeRouter = Router();

stripeRouter.post('/payment-intent', createPaymentIntent)
stripeRouter.post('/update-user-payment-intent/:userId/:paymentIntentId', updateUserPaymentIntent)
stripeRouter.get('/check/:userId', checkIfUserPay)

export default stripeRouter;