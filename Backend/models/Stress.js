const mongoose = require("mongoose")

const StressSchema = new mongoose.Schema({

    score: Number,
    result: String,

    date: {
        type: Date,
        default: Date.now
    }

})

module.exports = mongoose.model("Stress", StressSchema)