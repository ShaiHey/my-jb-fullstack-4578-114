import { NextFunction, Request, Response } from "express";
import { UserModel } from "../../models/user";
import { Dropbox } from "dropbox";
import sqsClient from "../../aws/sqs";
import { SendMessageCommand } from "@aws-sdk/client-sqs";
import c from "config";
import { processedFilesModel } from "../../models/processed-file";

export async function verify(req: Request, res: Response, next: NextFunction) {
    res.send(req.query.challenge)
}

export async function webhook(req: Request, res: Response, next: NextFunction) {
    try {
        const user = await UserModel.findOne({
            'dropbox.id': req.body.list_folder?.accounts[0]
        })

        if (user && user.paymentIntent) {
            const dbx = new Dropbox({ accessToken: user.dropbox.accessToken })

            const delta = await dbx.filesListFolderContinue({ cursor: user.dropbox.cursor })

            const docxEntries = delta.result.entries.filter(entry =>
                entry.path_lower.endsWith('.docx')
            )

            const unprocessedEntries = []
            for (const entry of docxEntries) {
                const alreadyProcessed = await processedFilesModel.findOne({
                    path: entry.path_lower,
                    userId: user.id
                })
                if (!alreadyProcessed) {
                    unprocessedEntries.push(entry)
                }
            }

            const results = await Promise.all(unprocessedEntries.map(entry =>
                dbx.filesGetTemporaryLink({ path: entry.path_lower })
            ))

            const queueResults = await Promise.all(results.map((link, index) =>
                sqsClient.send(new SendMessageCommand({
                    QueueUrl: c.get('app.docxToTextQueueUrl'),
                    MessageBody: JSON.stringify({
                        userId: user.id,
                        link: link.result.link
                    })
                }))
            ))

            await processedFilesModel.insertMany(
                unprocessedEntries.map(entry => ({
                    userId: user.id,
                    path: entry.path_lower,
                    processedAt: new Date()
                }))
            )

            console.log('SQS send results:', queueResults)
        }

        res.status(200).send()
    } catch (error) {
        next(error)
    }
}