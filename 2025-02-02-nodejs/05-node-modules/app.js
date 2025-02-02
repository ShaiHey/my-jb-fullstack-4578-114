const axios = require('axios');

(async () => {
    const getData = async url => (await axios.get(url)).data;
    
    const users = await getData(`https://jsonplaceholder.typicode.com/users`);
    users.forEach(({name}) => console.log(name));
})();