const mongoose = require("mongoose");
const User = require("./userModel")
const deskSchema = new mongoose.Schema({
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
    },
    created_by: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', 
        required: true
    }
});

const Desk = mongoose.model("Desk", deskSchema);
module.exports = Desk;