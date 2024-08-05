const { listServices } = require("../services");



let getList = async (req, res) => {
    console.log(req);
    try {

        let list = await listServices.fetchList()

        res.status(200).json({
            message: "list get sucess",
            list,
        })

    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

let postList = async (req, res) => {
    try {

        let body = req.body;

        let list = await listServices.createList(body)
        res.status(201).json({
            message: "work Add Successfully...",
            list,
        })
    } catch (error) {
        res.status(500).json({
            error: error.message,
        })
    }
}

let deleteList = async (req, res) => {
    try {

        let { id } = req.params;

        let findId = await listServices.findById(id)
        if (!findId) {
            res.status(500).json({ message: "work is alreay comlited" })
        }

        let list = await listServices.findAndDelete(id)

        res.status(200).json({
            message: "work complate success",
            list,
        })
    } catch (error) {
        res.status(500).json({
            error: error.message,
        });
    }

}

let updateList = async (req, res) => {
    try {

        let { id } = req.params;
        let body = req.body;

        let newBody = {
            id,
            ...body,
        }
        let list = await listServices.findByIdAndUpdate(id, body)
        console.log(list);

        res.status(200).json({
            message: "work update success",
            newBody,
        })
    } catch (error) {
        res.status(500).json({
            error: error.message,
        })
    }
}

module.exports = { getList, postList, deleteList, updateList }