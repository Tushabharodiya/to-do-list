const { listSchema } = require("../models")
const { getData, postData, deleteData, findDataId, updateData } = require("../query/query")


let fetchList = () => {
    return getData(listSchema)
}

let createList = (body) => {
    return postData(listSchema, body)
}

let findAndDelete = (id) => {
    return deleteData(listSchema, id)
}

let findById = (id) => {
    return findDataId(listSchema, id)
}

let findByIdAndUpdate = (id, body) => {
    return updateData(listSchema, id, body)
}

module.exports = { fetchList, createList, findAndDelete, findById, findByIdAndUpdate }