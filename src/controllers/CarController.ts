import { NextFunction, Request, Response } from 'express';
import CarService from '../services/CarService';

class CarController {
  constructor(private carService = new CarService()) {}

  public async insertCar(req: Request, res: Response, next: NextFunction)
    : Promise<Response | void> {
    try {
      const carData = req.body;
      const car = await this.carService.insertCar(carData);
      return res.status(201).json(car);
    } catch (e) {
      next(e);
    }
  }

  public async read(req: Request, res: Response, next: NextFunction)
    : Promise<Response | void> {
    try {
      const cars = await this.carService.read();
      return res.status(200).json(cars);
    } catch (e) {
      next(e);
    }
  }

  public async readOne(req: Request, res: Response, next: NextFunction)
    : Promise<Response | void> {
    try {
      const { id } = req.params;
      const cars = await this.carService.readOne(id);
      return res.status(200).json(cars);
    } catch (e) {
      next(e);
    }
  }
}

export default CarController;
