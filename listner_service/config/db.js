const mongoose = require('mongoose');


module.exports = function initializeDB() {
    mongoose.connect("mongodb uri", {
        useNewUrlParser: true, useUnifiedTopology: true
    });

    var db = mongoose.connection;

    // check connection
    db.on('open', () => {
        console.log('Connected to db')
    });

    // check for db error
    db.on('error', (err) => {
        console.error(err.message)
    });
}