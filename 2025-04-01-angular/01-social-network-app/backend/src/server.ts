import config from "config";
import { server, start } from "./app"

const port = config.get<number>('app.port');
const name = config.get<string>('app.name');

(async () => {
    await start()

    server.listen(port, () => console.log(`Server ${name} started on port ${port}.....`));
})();