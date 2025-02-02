const { createServer } = require('http');

const users = [
    { name: 'Alice', email: 'alice@example.com', age: 30 },
    { name: 'Bob', email: 'bob@example.com', age: 25 },
    { name: 'Charlie', email: 'charlie@example.com', age: 35 },
    { name: 'Diana', email: 'diana@example.com', age: 28 }
];

const list = `
    name,age,phone
    ido,23,55555
    mishel,23,44444
    daniel,32,33333
`

const requestListener = (request, response) => {
    switch (request.url) {
        case "/users":
            switch (request.method) {
                case 'GET':
                    response.setHeader('Content-Type', 'application/json');
                    response.end(JSON.stringify(users));
                break;

                case 'POST':
                    response.end('User added');
                break;
                
                default:
                    response.writeHead(404)
                    response.end('Unknown operation')
                break;
            }
        break;

        case "/list":
            switch (request.method) {
                case 'GET':
                    response.setHeader('Content-Type', 'text/csv');
                    response.end(list)
                break;

                case 'POST':
                    response.end('List saved');
                break;

                default:
                    response.writeHead(404)
                    response.end('Unknown operation')
                break;
            }
        break;
    
        default:
            response.writeHead(404)
            response.end('Unknown operation')
        break;
    }
}

createServer(requestListener).listen(3000, () => console.log('Server started on port 3000'));