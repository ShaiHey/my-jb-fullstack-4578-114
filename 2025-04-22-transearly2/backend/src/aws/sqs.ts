import { CreateQueueCommand, SQSClient } from "@aws-sdk/client-sqs";
import config from 'config';

const sqsConfig = JSON.parse(JSON.stringify(config.get('sqs.connection')));
if(!config.get<boolean>('sqs.isLocalStack')) delete sqsConfig.endpoint;

const sqsClient = new SQSClient(sqsConfig);

export async function createAppQueuesIfNotExist() {
    try {
        const docxToTextQueue = await sqsClient.send(
            new CreateQueueCommand({
                QueueName: config.get<string>('sqs.queueDocxToTextName')
            })
        )
        console.log(`Docx to txt queue is ${docxToTextQueue.QueueUrl}`)

        const translateQueue = await sqsClient.send(
            new CreateQueueCommand({
                QueueName: config.get<string>('sqs.queueTranslate')
            })
        )
        console.log(`Translate queue is ${translateQueue.QueueUrl}`)

    } catch (error) {
        // ignore
        console.log('Queue probably already exist')
    }
}

export default sqsClient;