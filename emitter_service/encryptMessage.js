const crypto = require('crypto')

module.exports = {
    encryptOriginalMessage: (originalMessage) => {
        const algorithm = 'aes-256-ctr';
        const key = "12345678901234567890123456789012";
        const iv = "1234567890123456";
        const cipher = crypto.createCipheriv(algorithm, key, iv)
        return cipher.update(JSON.stringify(originalMessage), 'utf8', 'hex') + cipher.final('hex')
    }
}