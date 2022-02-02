const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server)

const { generateMessage } = require('./generateMessage')


io.on('connection', (socket) => {
    console.log('a user connected');
    socket.on('disconnect', () => {
        console.log('user disconnected');
    });
});

setInterval(emitMessage, 10000)

function emitMessage() {
    let encryptedMessage = generateMessage()
    io.emit("encryptedMessage", { encryptedMessage })
}

server.listen(3000, () => {
    console.log('listening on port 3000');
});
