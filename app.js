import express from "express"
import cors from "cors"
import routes from "./src/routes/index.js";
import db from "./src/database/db.js";
import HandleError from "./src/middleware/HandleError.js";

db.on("error", console.log.bind(console, "Erro ao conectar ao Mongo"))
db.once("open", () =>{
    console.log("Conectado com sucesso!")
})

const app = express();
const corsOptions = {
    exposedHeaders: ['token']
}
app.use(cors(corsOptions));

routes(app)
app.use(HandleError.handle)
app.listen(5000, ()=>{
    console.log("Server running at port 5000...");
}); 

export default app