const { createProxyMiddleware } = require('http-proxy-middleware');
var express = require('express');

const options = {
    target: 'http://localhost:8844',
    logLevel: 'debug',
    ws: true
}

const exampleProxy = createProxyMiddleware(options);

const app = express();
app.use(exampleProxy);
const server = app.listen(5002);
// server.on('upgrade', exampleProxy.upgrade);