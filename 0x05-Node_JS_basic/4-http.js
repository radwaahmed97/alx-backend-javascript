const { createServer } = require('node:http');

const hostname = 'localhost';
const port = 1245;

const server = createServer((req, res) => {
    if (req.method === 'GET' && req.url === '/') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Hello Holberton School!');
    }
    });
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
