import Logger from "./logger.js";

export default class FailLogger extends Logger {
    log(message: string): void {
        console.warn(message)
    }
}