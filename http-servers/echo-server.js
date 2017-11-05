const http = require('http');
const url = require('url');

const server = http.createServer((request, response) => {
    const {query} = url.parse(request.url, true);
    response.end(query.message);
});

server.listen('9876');