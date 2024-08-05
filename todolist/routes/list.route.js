let express = require("express");
const { listController } = require("../controller");
const validate = require("../middleware/validate");
const { listValidation } = require("../validation");

let route = express.Router();

route.get("/get", listController.getList);
route.post("/create", validate(listValidation.list), listController.postList);
route.delete("/delete/:id", listController.deleteList);
route.put("/update/:id",validate(listValidation.list), listController.updateList)


module.exports = route;