import AlertLogger from "./alertLogger.js";
import ConsoleLogger from "./consoleLogger.js";
import FailLogger from "./failLogger.js";
// function getLogger(name: string): Logger {
//     return name === "console" ? new ConsoleLogger() : name === "alert" ? new AlertLogger() : new FailLogger()
// }
function getLogger(name) {
    switch (name) {
        case "console":
            return new ConsoleLogger();
        case "alert":
            return new AlertLogger();
        default:
            return new FailLogger();
    }
}
const logger = getLogger("console");
logger.log("Hello polymorphism");
