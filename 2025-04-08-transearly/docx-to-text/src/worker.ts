import { DeleteMessageCommand, ReceiveMessageCommand, SQSClient } from "@aws-sdk/client-sqs";
import config from "config";
import ConvertAPI from 'convertapi';

const convertApi = new ConvertAPI(config.get<string>('convertApi.secret'));
const sqsConfig = JSON.parse(JSON.stringify(config.get('sqs.connection')));
if (!config.get<boolean>('sqs.isLocalStack')) delete sqsConfig.endpoint;

const sqsClient = new SQSClient(sqsConfig);

async function work() {
    while (true) {
        try {
            const { Messages } = await sqsClient.send(
                new ReceiveMessageCommand({
                    QueueUrl: config.get<string>('sqs.queueUrl'),
                    MaxNumberOfMessages: 1
                })
            )
    
            if (Messages) {
                const { Body, ReceiptHandle } = Messages[0]
                
                const payload = JSON.parse(Body!)
    
                const resultPromise = await convertApi.convert('txt', { File: payload.link }, 'docx')
                console.log(resultPromise.response)
    
                await sqsClient.send(new DeleteMessageCommand({
                    QueueUrl: config.get<string>('sqs.queueUrl'),
                    ReceiptHandle
                }))
    
            } else {
                console.log('Nothing to process....')
            }
    
            await new Promise(resolve => setTimeout(resolve, 1000));
        } catch (error) {
            console.error(error)
        }
    }
}

work();