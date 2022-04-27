import mongoose from "mongoose";
import dotenv from "dotenv"

dotenv.config()

export function connectToDatabase() {
    mongoose.connect(`${process.env.REMOTEDB}`, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log('Mongo DB conectado ✔');
    })
    .catch((err) => {
        return console.log(`Erro de conexão com o banco ❌: ${err}`);
    });
}
