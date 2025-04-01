import { CreateBucketCommand, S3Client } from "@aws-sdk/client-s3";
import config from 'config';

const s3Config = JSON.parse(JSON.stringify(config.get('s3.connection')));
if(!config.get<boolean>('s3.isLocalStack')) delete s3Config.endpoint;

const s3Client = new S3Client(s3Config)

export async function createAppBucketIfNotExist() {
    try {
        await s3Client.send(
            new CreateBucketCommand({
                Bucket: config.get<string>('s3.bucket')
            })
        )
    } catch (error) {
        console.log('Bucket probably already exist')
    }
}

export default s3Client;