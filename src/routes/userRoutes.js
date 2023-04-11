import express from "express"

import Controller from "../controller/usersController.js"
const routes = express.Router()

routes
    .post("/user", Controller.registerUser)
    .get("/user", Controller.listUser)
    .get("/user/:id", Controller.searchUser)
    .put("/user/:id", Controller.updateUser)
    .delete("/user/:id", Controller.deleteUser)
    
    

    export default routes