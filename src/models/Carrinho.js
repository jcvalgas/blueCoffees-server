import mongoose from 'mongoose';

const CarrinhoSchema = new mongoose.Schema({
  coffeeId: {
    type: String,
    required: true,
  },
  quantidade: {
    type: Number,
    required: true,
  },
});

export const Carrinho = mongoose.model('Carrinho', CarrinhoSchema);
