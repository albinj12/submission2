const data = require('./data.json')
const { createHash } = require('./createHash')
const { encryptOriginalMessage } = require('./encryptMessage')

module.exports = {
    generateMessage: () => {
        let message = ""
        let totalNoOfMessages = 49
        let currentMessagesCount = 0
        while (currentMessagesCount != totalNoOfMessages) {
            let originalMessage = {}
            originalMessage.name = data.names[Math.floor(Math.random() * (data.names.length))]
            originalMessage.origin = data.cities[Math.floor(Math.random() * (data.cities.length))]
            originalMessage.destination = data.cities[Math.floor(Math.random() * (data.cities.length))]
            originalMessage.secret_key = createHash({ name: originalMessage.name, origin: originalMessage.origin, destination: originalMessage.destination })
            encryptedMessage = encryptOriginalMessage(originalMessage)
            message += encryptedMessage + "|"
            currentMessagesCount++
        }
        return message
    },


}