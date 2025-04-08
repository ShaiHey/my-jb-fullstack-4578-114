import { DeleteMessageCommand, ReceiveMessageCommand, SendMessageCommand, SQSClient } from "@aws-sdk/client-sqs";
import axios from "axios";
import config from "config";
import OpenAI from "openai";

const sqsConfig = JSON.parse(JSON.stringify(config.get('sqs.connection')));
if (!config.get<boolean>('sqs.isLocalStack')) delete sqsConfig.endpoint;

const sqsClient = new SQSClient(sqsConfig);

const chatgpt = new OpenAI({
    apiKey: config.get<string>('openAi.secretKey')
});

async function work() {
    while (true) {
        try {
            const { Messages } = await sqsClient.send(
                new ReceiveMessageCommand({
                    QueueUrl: config.get<string>('sqs.translateQueueUrl'),
                    MaxNumberOfMessages: 1
                })
            )
    
            if (Messages) {
                const { Body, ReceiptHandle } = Messages[0]
                
                const payload = JSON.parse(Body!)

                // get the text to translate
                const axiosResponse = await axios(payload.link);
                console.log(`Translation is ${axiosResponse.data}`)

                const response = await chatgpt.responses.create({
                    model: 'gpt-4o-mini',
                    input: `Please translate the following to ${payload.language}: ${axiosResponse.data}`,
                })

                console.log(response)
    
                await sqsClient.send(new DeleteMessageCommand({
                    QueueUrl: config.get<string>('sqs.translateQueueUrl'),
                    ReceiptHandle
                }))

                console.log(`Deleted message from translate queue`)
    
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