const { userSchema } = require("../models")
const { getData, postData, deleteData, findDataId, updateData } = require("../query/query")



let fetchUser = () => {
    return getData(userSchema)
}

let createUser = (body) => {
    return postData(userSchema, body)
}

let findAndDelete = (id) => {
    return deleteData(userSchema, id);
}

let findById = (id) => {
    return findDataId(userSchema, id)
}

let findByIdAndUpdate = (id, body) => {
    return updateData(userSchema, id, body)
}

module.exports = { fetchUser, createUser, findAndDelete, findById, findByIdAndUpdate }