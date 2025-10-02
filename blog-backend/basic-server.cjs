const http = require('http');

const server = http.createServer((_req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hola Mundo, desde Node JS');
});

server.listen(3000, () => {
    console.log('Servidor ejecutándose en http://localhost:3000');
});