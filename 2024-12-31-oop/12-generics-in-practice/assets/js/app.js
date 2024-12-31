import axios from '../node_modules/axios/index';
async function printUsers() {
    const users = await axios.get("https://jsonplaceholder.typicode.com/users");
    console.log(users);
}
printUsers();
