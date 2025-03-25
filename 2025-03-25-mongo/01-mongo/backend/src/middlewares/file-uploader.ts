import { Upload } from "@aws-sdk/lib-storage";
import config from 'config';
import { NextFunction, Request, Response } from "express";
import { UploadedFile } from "express-fileupload";
import path from "path";
import { v4 } from "uuid";
import s3Client from "../aws/s3";
import sqsClient, { queueUrl } from "../aws/sqs";
import { SendMessageCommand } from "@aws-sdk/client-sqs";

declare global {
    namespace Express {
        interface Request {
            imageUrl?: string;
        }
    }
}

export default function fileUploader(imageName: string) {
    return async function (req: Request, res: Response, next: NextFunction) {
        if (!req.files[imageName]) return next();
    
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

        const sqsResponse = await sqsClient.send(
            new SendMessageCommand({
                QueueUrl: queueUrl,
                MessageBody: JSON.stringify({
                    bucket: response.Bucket,
                    key: response.Key
                })
            })
        )

        console.log(sqsResponse)
    
        req.imageUrl = `${response.Bucket}/${response.Key}`
        next();
    }
}