import mongoose from 'mongoose';

export const validId = (req, res, next) => {
  const paramId = req.params.id;
  if (!mongoose.Types.ObjectId.isValid(paramId)) {
    return res.status(404).send({ message: 'ID inválido' });
  }
  next();
};

export const validObjectBody = (req, res, next) => {
  const objectBody = req.body;
  if (
    !objectBody ||
    !objectBody.sabor ||
    !objectBody.descricao ||
    !objectBody.foto ||
    !objectBody.preco
  ) {
    return res
      .status(400)
      .send({
        message:
          'Você não preencheu todos os dados para adicionar ou atualizar um café!',
      });
  }
  next();
};
