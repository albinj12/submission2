const crypto = require('crypto')

module.exports = {
    verifyMessageHash: (decryptedmessage) => {
        try {
            message = {
                name: decryptedmessage.name,
                origin: decryptedmessage.origin,
                destination: decryptedmessage.destination
            }
            let hash = crypto.createHash("sha256", "secretstring").update(JSON.stringify(message)).digest("hex")
            if (decryptedmessage.secret_key === hash) {
                return true
            }
            return false
        } catch (err) {
            throw err
        }

    }
}