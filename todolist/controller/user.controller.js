const { userServices } = require("../services")



let getUser = async (req, res) => {

    try {
        let user = await userServices.fetchUser();
        //   console.log(user);

        res.status(200).json({
            message: "get user sucess",
            user,
        })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

let postUser = async (req, res) => {
    try {
        let body = req.body;

        let user = await userServices.createUser(body);

        res.status(201).json({
            message: "user create successfuly",
            user,
        })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

let deleteUser = async (req, res) => {
    try {
        let { id } = req.params;

        let findId = await userServices.findById(id)
        console.log(findId);
        if (!findId) {
            res.status(500).json({ message: "user is not found" })
        }

        let user = await userServices.findAndDelete(id);

        res.status(200).json({
            message: "user delete success",
            user,
        });

    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

let updateUser = async (req, res) => {

    try {
        let { id } = req.params;
        let body = req.body;

        let newbody = {
            id,
            ...body,
        }
        let user = await userServices.findByIdAndUpdate(id, body)
        console.log(user);

        res.status(200).json({
            message: "user update success",
            newbody,
        })
    } catch (error) {
        res.status(200).json({ error: error.message})
    }
}

module.exports = { getUser, postUser, deleteUser, updateUser }