(async () => {
    const getData = async url => fetch(url).then(response => response.json());
    
    const users = await getData(`https://jsonplaceholder.typicode.com/users`);
    users.forEach(({name}) => console.log(name));
})();