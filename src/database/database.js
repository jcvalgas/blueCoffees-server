import mongoose from "mongoose";

export function connectToDatabase() {
    mongoose.connect("mongodb://localhost:27017/blue-coffeesDB", {
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
