import swaggerUi from 'swagger-ui-express';
import {readFile} from "fs/promises";
import express from 'express';
import {
  findAllCoffeesController,
  findByIdCoffeeController,
  createCoffeeController,
  updateCoffeeController,
  deleteCoffeeController,
} from '../controllers/coffee.controller.js';
import {
  findAllCarrinhoController,
  createManyItemsCarrinhoController,
  deleteAllItemsCarrinhoController,
} from '../controllers/carrinho.controller.js';
import {
  validId,
  validObjectBody,
  validObjectBodyCarrinho,
} from '../middlewares/coffee.middleware.js';

export const routes = express.Router();

const swaggerDocument = JSON.parse(await readFile('swagger.json', 'utf8'));
// Rotas Swagger
routes.use('/api-docs', swaggerUi.serve)
routes.get('/api-docs', swaggerUi.setup(swaggerDocument))

// Rotas API
routes.get('/find-coffees', findAllCoffeesController);
routes.get('/find-coffees/:id', validId, findByIdCoffeeController);
routes.post('/create', validObjectBody, createCoffeeController);
routes.put('/update/:id', validId, validObjectBody, updateCoffeeController);
routes.delete('/delete/:id', validId, deleteCoffeeController);

// Rotas Carrinho
routes.get('/all-carrinho', findAllCarrinhoController);
routes.post(
  '/create-carrinho',
  validObjectBodyCarrinho,
  createManyItemsCarrinhoController,
);
routes.delete('/finish-carrinho', deleteAllItemsCarrinhoController);
