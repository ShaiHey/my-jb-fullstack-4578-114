import { DeleteMessageCommand, ReceiveMessageCommand, SendMessageCommand, SQSClient } from "@aws-sdk/client-sqs";
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
                    QueueUrl: config.get<string>('sqs.docxToTxtQueueUrl'),
                    MaxNumberOfMessages: 1
                })
            )
    
            if (Messages) {
                const { Body, ReceiptHandle } = Messages[0]
                
                const payload = JSON.parse(Body!)

                console.log(`Converting ${payload.link} from docx to txt....`)
    
                const resultPromise = await convertApi.convert('txt', { File: payload.link }, 'docx')
                console.log(resultPromise.response)
                
                const results = await Promise.all(config.get<string[]>('languages').map(language => sqsClient.send(new SendMessageCommand({
                    QueueUrl: config.get('sqs.translateQueueUrl'),
                    MessageBody: JSON.stringify({
                        userId: payload.userId,
                        link: resultPromise.file.url,
                        language,
                        name: resultPromise.file.fileName.substring(0, resultPromise.file.fileName.lastIndexOf("."))
                    })
                }))))

                console.log(`Sent ${results.length} messages to translate...`)
                console.log(results)
    
                await sqsClient.send(new DeleteMessageCommand({
                    QueueUrl: config.get<string>('sqs.docxToTxtQueueUrl'),
                    ReceiptHandle
                }))

                console.log(`Deleted message from docx-to-txt queue`)
    
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