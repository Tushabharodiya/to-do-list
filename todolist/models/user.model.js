let mongoose = require("mongoose")

let userSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    password: {
        type: String,
    }
})


let user = mongoose.model("userSchema", userSchema)

module.exports = user; 