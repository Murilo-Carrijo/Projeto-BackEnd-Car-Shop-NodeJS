import { Router } from 'express';
import CarController from '../controllers/CarController';

const carRouter = Router();

const carController = new CarController();

carRouter
  .post('/cars', (req, res, next) => carController.insertCar(req, res, next));

export default carRouter;
