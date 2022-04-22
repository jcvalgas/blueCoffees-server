import mongoose from "mongoose";
import {
  findAllCoffeesService,
  findByIdCoffeeService,
  createCoffeeService,
  updateCoffeeService,
  deleteCoffeeService
} from '../services/coffee.service.js';

export const findAllCoffeesController = async (req, res) => {
  const allcoffees = await findAllCoffeesService();
  res.send(allcoffees);
};

export const findByIdCoffeeController = async (req, res) => {
  const paramId = req.params.id;
  if (!mongoose.Types.ObjectId.isValid(paramId)) {
    console.log(paramId) 
    res
     .status(404)
     .send({ message: "ID não encontrado" });
     return;
  }
  const choosenCoffee = await findByIdCoffeeService(paramId);
  if(!choosenCoffee) {
    res
    .status(404)
    .send({message: 'Café não encontrado'})
    return;
  }
    res.send(choosenCoffee);
};

export const createCoffeeController = async (req, res) => {
  const createCoffee = req.body;
  if (
    !createCoffee ||
    !createCoffee.sabor ||
    !createCoffee.descricao ||
    !createCoffee.foto ||
    !createCoffee.preco
  ) {
    return res.status(400).send(
      {message: 'Você não preencheu todos os dados para adicionar um novo café ao cardápio!'},
    );
  }
  const newCoffee = await createCoffeeService(createCoffee);
  res.send(newCoffee);
};

export const updateCoffeeController = async (req, res) => {
  const paramId = req.params.id;
  const editCoffee = req.body;
  if (!mongoose.Types.ObjectId.isValid(paramId)) {
    return res.status(404).send({ message: "Café não encontrado" })
  }

  if (!editCoffee ||
    !editCoffee.sabor ||
    !editCoffee.descricao ||
    !editCoffee.foto ||
    !editCoffee.preco) {
    return res.status(400).send({ message: "Você não preencheu todos os dados para editar o café!" });
  }
  const updateCoffee = await updateCoffeeService(paramId, editCoffee);
  res.send(updateCoffee);
};

export const deleteCoffeeController = async (req, res) => {
  const paramId = req.params.id;
  if (!mongoose.Types.ObjectId.isValid(paramId)) {
    return res.status(404).send({ message: "Café não encontrado" })
  }
  await deleteCoffeeService(paramId);
  res.send({message: 'Café excluido com sucesso'});
};
