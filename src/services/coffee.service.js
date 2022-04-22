import { Coffee } from '../models/Coffee.js';

export const findAllCoffeesService = async () => {
  const allCoffees = await Coffee.find();
  return allCoffees;
};

export const findByIdCoffeeService = async (paramId) => {
  const oneCoffee = await Coffee.findById(paramId);
  return oneCoffee;
};

export const createCoffeeService = async (newCoffee) => {
  const createdCoffee = await Coffee.create(newCoffee);
  return createdCoffee;
};

export const updateCoffeeService = async (paramId, editedCoffee) => {
  const updateCoffee = await Coffee.findByIdAndUpdate(paramId, editedCoffee);
  return updateCoffee;
};

export const deleteCoffeeService = async (paramId) => {
  return Coffee.findByIdAndDelete(paramId);
};
