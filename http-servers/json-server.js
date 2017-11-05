const http = require('http');

const product = { id: 1,
   name: 'Supreme T-Shirt',
   brand: 'Supreme',
   price: 99.99,
   options: [
       { color: 'blue' },
       { size: 'XL' }
   ]
}

const server = http.createServer((request, response) => {
    response.setHeader('Content-Type', 'application/json');
    response.end(JSON.stringify(product));
});

server.listen('9876');