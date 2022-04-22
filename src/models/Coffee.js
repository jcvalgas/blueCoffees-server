import mongoose from 'mongoose';

const CoffeeSchema = new mongoose.Schema({
  sabor: {
    type: String,
    required: true,
  },
  descricao: {
    type: String,
    required: true,
  },
  foto: {
    type: String,
    required: true,
  },
  preco: {
    type: Number,
    required: true,
  },
});

export const Coffee = mongoose.model("Coffee", CoffeeSchema);
