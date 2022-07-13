import CarSchema, { Car } from '../interfaces/CarInterface';
import CarModel from '../models/CarModel';
import BadRequest from '../errors/BadRequest';

class CarService {
  constructor(private carModel = new CarModel()) {}

  public async insertCar(newCar: Car): Promise<Car | null> {
    const valid = CarSchema.safeParse(newCar);
    if (!valid.success) {
      throw new BadRequest(valid.error.message);
    }
    const car = await this.carModel.create(newCar);
    return car;
  }

  public async read(): Promise<Car[]> {
    const cars = await this.carModel.read();
    return cars;
  }
}

export default CarService;
