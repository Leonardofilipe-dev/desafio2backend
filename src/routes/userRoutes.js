import express from "express"

import Controller from "../controller/usersController.js"
import Validations from "../../validations/userValidation.js"
const routes = express.Router()

routes
    .post("/user", Validations, Controller.registerUser)
    .get("/user", Controller.listUser)
    .get("/user/:id", Controller.searchUser)
    .put("/user/:id", Controller.updateUser)
    .delete("/user/:id", Controller.deleteUser)
    
    

    export default routes