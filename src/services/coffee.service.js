import { Coffee } from '../models/Coffee.js';

export const findAllCoffeesService = async () => {
  const coffees = await Coffee.find();
  return coffees;
};

export const findByIdCoffeeService = async (paramId) => {
  const coffee = await Coffee.findById(paramId);
  return coffee;
};

export const createCoffeeService = async (newCoffee) => {
  const coffeeCriado = await Coffee.create(newCoffee);
  return coffeeCriado;
};

export const updateCoffeeService = async (id, edit) => {
  const coffeeAtt = await Coffee.findByIdAndUpdate(id, edit);
  return coffeeAtt;
};

export const deleteCoffeeService = async (id) => {
  return Coffee.findByIdAndDelete(id);
};
