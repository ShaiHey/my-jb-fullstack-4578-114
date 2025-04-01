import config from "config";
import { io } from "socket.io-client";

const socket = io(config.get<string>('io.url'));

export default socket;