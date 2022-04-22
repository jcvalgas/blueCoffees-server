import mongoose from "mongoose";
import {
  findAllCoffeesService,
  findByIdCoffeeService,
  createCoffeeService,
  updateCoffeeService,
  deleteCoffeeService
} from '../services/coffee.service.js';

export const findAllCoffeesController = async (req, res) => {
  const coffees = await findAllCoffeesService();
  res.send(coffees);
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
  const coffee = req.body;
  if (
    !coffee ||
    !coffee.sabor ||
    !coffee.descricao ||
    !coffee.foto ||
    !coffee.preco
  ) {
    return res.status(400).send(
      {message: 'Você não preencheu todos os dados para adicionar um novo café ao cardápio!'},
    );
  }
  const newCoffee = await createCoffeeService(coffee);
  res.send(newCoffee);
};

export const updateCoffeeController = async (req, res) => {
  const idParam = req.params.id;
  const coffeeEdit = req.body;
  if (!mongoose.Types.ObjectId.isValid(idParam)) {
    return res.status(404).send({ message: "Café não encontrado" })
  }

  if (!coffeeEdit ||
    !coffeeEdit.sabor ||
    !coffeeEdit.descricao ||
    !coffeeEdit.foto ||
    !coffeeEdit.preco) {
    return res.status(400).send({ message: "Você não preencheu todos os dados para editar o café!" });
  }
  const updateCoffee = await updateCoffeeService(idParam, coffeeEdit);
  res.send(updateCoffee);
};

export const deleteCoffeeController = async (req, res) => {
  const idParam = req.params.id;
  if (!mongoose.Types.ObjectId.isValid(idParam)) {
    return res.status(404).send({ message: "Café não encontrado" })
  }
  await deleteCoffeeService(idParam);
  res.send({message: 'Café excluido com sucesso'});
};
