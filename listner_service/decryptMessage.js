const crypto = require('crypto');

module.exports = {
    decryptMessage: (encryptedMessage) => {
        try {
            let encryptedMessages = encryptedMessage.split('|')
            for (i = 0; i < encryptedMessages.length - 1; i++) {
                const algorithm = 'aes-256-ctr';
                const key = "12345678901234567890123456789012";
                const iv = "1234567890123456";
                let cipherText = encryptedMessages[i]
                const decipher = crypto.createDecipheriv(algorithm, key, iv)
                let message = decipher.update(cipherText, 'hex', 'utf8') + decipher.final('utf8')
                return JSON.parse(message)
            }
        } catch (err) {
            throw err
        }


    }
}