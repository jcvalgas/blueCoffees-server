import express from "express"
import cors from "cors"
import { connectToDatabase } from "./src/database/database.js";
import {routes} from './src/routes/coffee.route.js'

const port = process.env.PORT || 3002;
const app = express();

connectToDatabase();

app.use(express.json());
app.use(cors())
app.use('/coffees', routes)



app.listen(port, () => {
    console.log(`Rodando na porta: ${port}`);
})
