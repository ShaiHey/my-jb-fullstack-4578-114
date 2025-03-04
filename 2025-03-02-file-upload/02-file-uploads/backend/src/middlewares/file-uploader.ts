import { CreateBucketCommand, S3Client } from "@aws-sdk/client-s3";
import { Upload } from "@aws-sdk/lib-storage";
import { NextFunction, Request, Response } from "express";
import { UploadedFile } from "express-fileupload";

declare global {
    namespace Express {
        interface Request {
            imageUrl?: string;
        }
    }
}

export default async function fileUploader(req: Request, res: Response, next: NextFunction) {
    if (!req.files || Object.keys(req.files).length === 0) return next();

    // Handle actual file upload
    const s3Client = new S3Client({
        region: 'us-east-1',
        forcePathStyle: true,
        credentials: {
            accessKeyId: "test",
            secretAccessKey: "test"
        },
        endpoint: 'http://localhost:4566'
    })

    const postImage = req.files.postImage as UploadedFile

    try {
        await s3Client.send(
            new CreateBucketCommand({
                Bucket: "il.co.johnbryce.shaihey"
            })
        )
    } catch (error) {
        // ignore
        console.log('Bucket probably already exist')
    }

    const upload = new Upload({
        client: s3Client,
        params: {
            Bucket: "il.co.johnbryce.shaihey",
            Key: postImage.name,
            Body: postImage.data
        }
    })
    
    const response = await upload.done()

    // req.imageUrl = "https://img.ksp.co.il/item/297798/b_1.jpg?v=1709735840";
    req.imageUrl = response.Location;
    next();
}