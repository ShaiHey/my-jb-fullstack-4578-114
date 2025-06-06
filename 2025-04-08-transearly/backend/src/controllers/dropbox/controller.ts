import { NextFunction, Request, Response } from "express";
import { UserModel } from "../../models/user";
import { Dropbox } from "dropbox";
import sqsClient from "../../aws/sqs";
import { SendMessageCommand } from "@aws-sdk/client-sqs";
import c from "config";

export async function verify(req: Request, res: Response, next: NextFunction) {
    res.send(req.query.challenge)
}

export async function webhook(req: Request, res: Response, next: NextFunction) {
    try {
        const user = await UserModel.findOne({
            'dropbox.id': req.body.list_folder?.accounts[0]
        })

        if(user) {
            const dbx = new Dropbox({accessToken: user.dropbox.accessToken})
            const delta = await dbx.filesListFolderContinue({ cursor: user.dropbox.cursor })
            const promises = delta.result.entries
                .filter(entry => entry.path_lower.endsWith('.docx'))
                .map(entry => dbx.filesGetTemporaryLink({ path: entry.path_lower }))
            const results = await Promise.all(promises)

            const queueResults = await Promise.all(results.map(link => sqsClient.send(new SendMessageCommand({
                QueueUrl: c.get('app.docxToTextQueueUrl'),
                MessageBody: JSON.stringify({
                    userId: user.id,
                    link: link.result.link
                })
            }))))

            console.log(queueResults)
        }

        res.status(200).send()
    } catch (error) {
        next(error)
    }
}