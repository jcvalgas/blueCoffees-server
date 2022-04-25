import {
  createManyItemsCarrinhoService,
  deleteAllItemsCarrinhoService,
  findAllCarrinhoService,
} from '../services/carrinho.service.js';

export const findAllCarrinhoController = async (req, res) => {
  const allCarrinho = await findAllCarrinhoService();
  if (!allCarrinho) {
    return res
      .status(404)
      .send({ message: 'Não existe nenhum item no carrinho.' });
  }
  res.send(allCarrinho);
};

export const createManyItemsCarrinhoController = async (req, res) => {
  const carrinho = req.body;
  const newCarrinho = await createManyItemsCarrinhoService(carrinho);
  res.status(201).send(newCarrinho);
};

export const deleteAllItemsCarrinhoController = async (req, res) => {
  await deleteAllItemsCarrinhoService();
  res.send({ message: 'Carrinho finalizado com sucesso.' });
};
