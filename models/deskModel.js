const mongoose = require("mongoose");

const deskSchema = new mongoose.Schema({
    userId: mongoose.Schema.Types.ObjectId,
    title: {
        type: String,
        required: true
    },
    messinessLevel: {
        type: Number,
        required: true
    },
    image: {
        type: String
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const Desk = mongoose.model("Desk", deskSchema); // Ensure model name is capitalized
module.exports = Desk;