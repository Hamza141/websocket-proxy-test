//WebSocket Client Endpoint in JavaScript

const WebSocket = require('ws');
const JSON = require('circular-json');

var ws = new WebSocket("ws://localhost:5002")

// Event handler for the WebSocket connection opening
ws.onopen = (event) => {
    console.log("Connected");
    let request = "this is a test"
    console.log("Sending: " + request)
    ws.send(request)
};

// Event handler for receiving text messages
ws.onmessage = (event) => {
    console.log("Recieved: " + event.data)
}

// Event handler for errors in the WebSocket object
ws.onerror = (event) => {
    console.log("Error " + JSON.stringify(event));
};

// Listen for the close connection event
ws.onclose = (event) => {
    console.log("Disconnected: " + JSON.stringify(event));
}
