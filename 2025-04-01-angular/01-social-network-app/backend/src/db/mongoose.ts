import config from "config";
import mongoose from "mongoose";

const { host, port, database } = config.get<{host: string, port: number, database: string}>('mongoose');

export async function connectToMongo() {
    try {
        await mongoose.connect(`mongodb://${host}:${port}/${database}`);
        console.log(`Connected to mongo....`);
    } catch (error) {
        console.error(error)
    }
}

export default mongoose;