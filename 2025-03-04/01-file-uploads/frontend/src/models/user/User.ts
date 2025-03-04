import Login from "./Login";

export default interface User extends Login {
    id: string;
    name: string;
    picUrl: string;
    createdAt: string;
    updatedAt: string;
}