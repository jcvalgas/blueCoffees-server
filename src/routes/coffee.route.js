import express from 'express';
import {
  findAllCoffeesController,
  findByIdCoffeeController,
  createCoffeeController,
  updateCoffeeController,
  deleteCoffeeController,
} from '../controllers/coffee.controller.js';
import { validId, validObjectBody } from '../middlewares/coffee.middleware.js';

export const routes = express.Router();

routes.get('/find-coffees', findAllCoffeesController);
routes.get('/find-coffees/:id', validId, findByIdCoffeeController);
routes.post('/create', validObjectBody, createCoffeeController);
routes.put('/update/:id', validId, validObjectBody, updateCoffeeController);
routes.delete('/delete/:id', validId, deleteCoffeeController);
