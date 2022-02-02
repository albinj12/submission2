const crypto = require('crypto')

module.exports = {
    createHash: (message) => {
        let hash = crypto.createHash("sha256", "secretstring").update(JSON.stringify(message)).digest("hex")
        return hash
    }
}