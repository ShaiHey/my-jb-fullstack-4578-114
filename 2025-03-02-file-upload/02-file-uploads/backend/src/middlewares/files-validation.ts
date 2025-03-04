import { NextFunction, Request, Response } from "express";
import { ObjectSchema } from "joi";
import AppError from "../errors/app-error";
import status from "http-status";

export default function filesValidation(validator: ObjectSchema) {
    return async function (req: Request, res: Response, next: NextFunction) {
        try {
            req.files = await validator.validateAsync(req.files || {});
            next()
        } catch (error) {
            next(new AppError(
                status.UNPROCESSABLE_ENTITY, // http code for Unprocessable Entity
                error.message
            ))
        }
    }
}