import CarSchema, { Car } from '../interfaces/CarInterface';
import CarModel from '../models/CarModel';
import BadRequest from '../errors/BadRequest';
import NotFound from '../errors/NotFound';

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

  public async readOne(id: string): Promise<Car | null> {
    console.log(id.length);
    if (id.length < 24) {
      throw new BadRequest('Id must have 24 hexadecimal characters');
    }
    const car = await this.carModel.readOne(id);
    if (!car) {
      throw new NotFound('Object not found');
    }
    return car;
  }
}

export default CarService;
