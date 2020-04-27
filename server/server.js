const http = require('http');
const WebSocket = require('ws');
const server = http.createServer();
const ws = new WebSocket.Server({ server });
ws.on('connection', function connection(ws) {
    ws.on('message', function incoming(message) {
        console.log('received: %s', message);
    });

    ws.send('something');
});

server.listen(8844);