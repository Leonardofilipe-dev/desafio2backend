import express from "express"

import Controller from "../controller/enventsController.js"
const routes = express.Router()

routes
    .post("/events", Controller.registerEvents)
    .get("/events", Controller.listEvents)
    .get("/events/:id", Controller.searchEvents)
    .put("/events/:id", Controller.updateEvents)
    .delete("/events/:id", Controller.deleteEvents)
    
    

    export default routes