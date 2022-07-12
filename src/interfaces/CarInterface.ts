import { z } from 'zod';
import VehicleSchama from './VehicleInterface';

const CarSchama = VehicleSchama.extend({
  doorsQty: z.number().gte(2).and(z.number().lte(4)),
  seatsQty: z.number().gte(2).and(z.number().lte(7)),
});

export type Car = z.infer<typeof CarSchama>;

export default CarSchama;
