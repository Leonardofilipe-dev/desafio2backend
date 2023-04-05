import express from "express"
import cors from "cors"

const app = express();
const corsOptions = {
    exposedHeaders: ['token']
}
app.use(cors(corsOptions));


app.get('/', (req, res) => {
    res.send('hello world')
  })

app.listen(5000, ()=>{
    console.log("Server running at port 5000...");
}); 

export default app