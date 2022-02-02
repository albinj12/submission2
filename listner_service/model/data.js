const mongoose = require('mongoose')

const dataSchema = new mongoose.Schema({ timestamp: Date, details: { name: String, origin: String, destination: String } }, {
    timeseries: {
        timeField: 'timestamp',
        granularity: 'seconds'
    },
});

module.exports = mongoose.model('Data', dataSchema)