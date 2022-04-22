import mongoose from 'mongoose';
import {
  findAllCoffeesService,
  findByIdCoffeeService,
  createCoffeeService,
  updateCoffeeService,
  deleteCoffeeService,
} from '../services/coffee.service.js';

export const findAllCoffeesController = async (req, res) => {
  const allCoffees = await findAllCoffeesService();
  res.send(allCoffees);
};

export const findByIdCoffeeController = async (req, res) => {
  const paramId = req.params.id;
  const choosenCoffee = await findByIdCoffeeService(paramId);
  if (!choosenCoffee) {
    res.status(404).send({ message: 'Café não encontrado' });
    return;
  }
  res.send(choosenCoffee);
};

export const createCoffeeController = async (req, res) => {
  const createCoffee = req.body;
  const newCoffee = await createCoffeeService(createCoffee);
  res.send(newCoffee);
};

export const updateCoffeeController = async (req, res) => {
  const paramId = req.params.id;
  const editCoffee = req.body;
  const updateCoffee = await updateCoffeeService(paramId, editCoffee);
  res.send(updateCoffee);
};

export const deleteCoffeeController = async (req, res) => {
  const paramId = req.params.id;
  await deleteCoffeeService(paramId);
  res.send({ message: 'Café excluido com sucesso' });
};
