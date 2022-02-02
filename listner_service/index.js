const express = require('express');
const app = express();
const http = require('http');
const { Server } = require("socket.io");
const ioClient = require('socket.io-client')
const cors = require('cors')

app.use(cors())
const server = http.createServer(app);
const io = new Server(server, { cors: { origin: "*" } })
const initializeDB = require('./config/db')
const dataModel = require('./model/data')
const { decryptMessage } = require('./decryptMessage')
const { verifyMessageHash } = require('./verifyMessageHash');

initializeDB()
var socket = ioClient.connect("http://localhost:3000")

var newSocket

io.on("connection", (socket) => {
    console.log("user connected")
    newSocket = socket
})

socket.on('encryptedMessage', async (message) => {
    try {
        if (Object.keys(message).length) {
            console.log(message)
            let decryptedmessage = decryptMessage(message.encryptedMessage)
            let messageVerified = verifyMessageHash(decryptedmessage)
            if (messageVerified) {
                let date = new Date()
                date.setSeconds(0, 0)
                timestamp = date.toISOString()
                await dataModel.insertMany({ timestamp: timestamp, details: { name: decryptedmessage.name, origin: decryptedmessage.origin, destination: decryptedmessage.destination } })
                if (newSocket != undefined) {
                    newSocket.emit('encryptedMessage', {
                        name: decryptedmessage.name,
                        origin: decryptedmessage.origin,
                        destination: decryptedmessage.destination
                    })
                }

            }
        }
    } catch (err) {
        console.log(err.stack)
    }

})



server.listen(3001, () => {
    console.log('listening on port 3001');
});
