import Logger from "./logger.js";
export default class FailLogger extends Logger {
    log(message) {
        console.warn(message);
    }
}
