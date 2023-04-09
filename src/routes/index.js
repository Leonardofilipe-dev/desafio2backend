import express from "express"

import eventsRoutes from "./eventsRoutes.js"


const routes = (app) => {
    app.use(
        express.json(),
        eventsRoutes
    )
}

export default routes