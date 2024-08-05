

let getData = (Schema) => {
    return Schema.find()
}

let postData = (Schema, body) => {
    return Schema.create(body)
}

let deleteData = (Schema, id) => {
    return Schema.findByIdAndDelete(id)
}

let findDataId = (Schema, id) => {
    return Schema.findById(id)
}

let updateData = (Schema, id, body) => {
    return Schema.findByIdAndUpdate(id, body)
}


module.exports = { getData, postData, deleteData, findDataId, updateData }
