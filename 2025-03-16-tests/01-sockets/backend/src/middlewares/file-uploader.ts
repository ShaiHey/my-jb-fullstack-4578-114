import { Upload } from "@aws-sdk/lib-storage";
import config from 'config';
import { NextFunction, Request, Response } from "express";
import { UploadedFile } from "express-fileupload";
import path from "path";
import { v4 } from "uuid";
import s3Client from "../aws/aws";
import { ObjectSchema } from "joi";

declare global {
    namespace Express {
        interface Request {
            imageUrl?: string;
        }
    }
}

export default function fileUploader(imageName: string) {
    return async function (req: Request, res: Response, next: NextFunction) {
        if (!req.files || Object.keys(req.files).length === 0) return next();
    
        const postImage = req.files[imageName] as UploadedFile
    
        const upload = new Upload({
            client: s3Client,
            params: {
                Bucket: config.get<string>('s3.bucket'),
                Key: `${v4()}${path.extname(postImage.name)}`,
                Body: postImage.data,
                ContentType: postImage.mimetype
            }
        })
        
        const response = await upload.done()
    
        req.imageUrl = response.Location;
        next();
    }
}