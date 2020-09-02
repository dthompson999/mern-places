console.log("place.model.js");

const mongoose = require("mongoose");

const PlaceSchema = new mongoose.Schema({

    name: {
        type: String,
        required: [true, "Name of Place is required."],
    },

    type: {
        type: String,
        required: [true, "Type of Place is required."],
        minlength: [3, "Type must be 3 character or longer."]
    },

    note: {
        type: String,
    },

}, {timestamps: true});

module.exports = mongoose.model("Place", PlaceSchema);