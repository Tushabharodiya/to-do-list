let express = require("express")
let userRoute = require("./user.route");
let listRoute = require("./list.route");

let routes = express.Router();

routes.use("/user", userRoute);
routes.use("/list",listRoute);


module.exports = routes;

