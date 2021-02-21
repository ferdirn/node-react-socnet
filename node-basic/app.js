const { sum } = require('./helpers');
const http = require('http');

const server = http.createServer((req, res) => {
    res.end("Hello World from Node JS updated");
});

server.listen(3000);

const total = sum(12, 200);
console.log("TOTAL:", total);