import { Schema, model as createModel, Document } from 'mongoose';
import { Car } from '../interfaces/CarInterface';
import GenericModel from './GenericModel';

interface Cars extends Car, Document { }

export const carSchema = new Schema<Cars>({
  model: String,
  year: Number,
  color: String,
  status: Boolean,
  buyValue: Number,
  doorsQty: Number,
  seatsQty: Number,
});
class CarModel extends GenericModel<Car> {
  constructor(private model = createModel('Carros', carSchema)) {
    super(model);
  }
}

export default CarModel;