import express from "express"

import eventsRoutes from "./eventsRoutes.js"
import userRoutes from "./userRoutes.js"


const routes = (app) => {
    app.use(
        express.json(),
        eventsRoutes,
        userRoutes
    )
}

export default routes