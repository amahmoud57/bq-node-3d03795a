import http from 'node:http';

const port = Number(process.env.PORT ?? 8080);
http.createServer((request, response) => {
  if (request.url === '/healthz') {
    response.writeHead(200, { 'content-type': 'text/plain' });
    response.end('node-3d03795a-ready');
    return;
  }
  response.writeHead(200, { 'content-type': 'application/json' });
  response.end(JSON.stringify({ case: 'node-3d03795a', path: request.url }));
}).listen(port, '0.0.0.0');
