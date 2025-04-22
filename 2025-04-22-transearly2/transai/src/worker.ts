import { DeleteMessageCommand, ReceiveMessageCommand, SendMessageCommand, SQSClient } from "@aws-sdk/client-sqs";
import axios from "axios";
import config from "config";
import { UserModel } from "./models/user";
import { Dropbox } from "dropbox";
import { connectToMongo } from "./db/mongoose";
import { GoogleGenAI } from "@google/genai";

const sqsConfig = JSON.parse(JSON.stringify(config.get('sqs.connection')));
if (!config.get<boolean>('sqs.isLocalStack')) delete sqsConfig.endpoint;

const sqsClient = new SQSClient(sqsConfig);

const ai = new GoogleGenAI({ apiKey: config.get<string>('googleAi.secretKey') });

async function work() {
    await connectToMongo()
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

                const response = await ai.models.generateContent({
                    model: 'gemini-2.0-flash',
                    contents: `Answer with only the result. No explanations, no introductions, Please translate the following to ${payload.language}: ${axiosResponse.data}`,
                })

                console.log(response)

                const user = await UserModel.findById(payload.userId);
                const dbx = new Dropbox({ accessToken: user?.dropbox.accessToken })
                dbx.filesUpload({
                    contents: response.text,
                    path: `/test.${payload.language}.txt`
                })
    
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