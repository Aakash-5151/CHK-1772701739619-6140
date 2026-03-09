const mongoose = require("mongoose")

const MoodSchema = new mongoose.Schema({

    mood: String,
    energy: String,
    notes: String,

    created: {
        type: Date,
        default: Date.now
    }

})

module.exports = mongoose.model("Mood", MoodSchema)