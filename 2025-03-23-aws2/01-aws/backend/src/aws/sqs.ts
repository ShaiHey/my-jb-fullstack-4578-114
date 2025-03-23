import { CreateQueueCommand, SQSClient } from "@aws-sdk/client-sqs";
import config from 'config';

const sqsConfig = JSON.parse(JSON.stringify(config.get('sqs.connection')));
if(!config.get<boolean>('sqs.isLocalStack')) delete sqsConfig.endpoint;

const sqsClient = new SQSClient(sqsConfig);
export let queueUrl = ''

export async function createAppQueueIfNotExist() {
    try {
        const queue = await sqsClient.send(
            new CreateQueueCommand({
                QueueName: config.get<string>('sqs.queueName')
            })
        )
        
        queueUrl = queue.QueueUrl;
    } catch (error) {
        // ignore
        console.log('Queue probably already exist')
    }
}

export default sqsClient;