let mongoose = require("mongoose")

let listSchema = new mongoose.Schema({
    title: {
        type: String,
    },
    description: {
        type: String,
    },
    completed: {
        type: Boolean,
        default: false,
    },
    date: {
        type: Date,
        default: Date.now
    },
})

let list = mongoose.model("listSchema", listSchema)

module.exports = list;

