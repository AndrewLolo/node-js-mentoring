const http = require('http');
const fs = require('fs');

const serverSync = http.createServer((request, response) => {
    const fileBuffer = fs
        .readFileSync('./index.html')
        .toString()
        .replace(/\{(.*?)\}/, 'HIIIII');

    response.setHeader('Content-Type', 'text/html');
    response.end(fileBuffer);
});

const server = http.createServer((request, response) => {
    response.setHeader('Content-Type', 'text/html');

    fs.createReadStream('./index.html')
        .pipe(response);
});

server.listen('9876');