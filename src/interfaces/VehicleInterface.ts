import { z } from 'zod';

const VehicleSchama = z.object({
  model: z.string().min(3, { message: 'Must be 3 or more characters long' }),
  year: z.number()
    .gt(1900, { message: 'Release year must be greater than 1900' })
    .lte(2022, { message: 'Release year must be less than 2022' }),
  color: z.string().min(3, { message: 'Must be 3 or more characters long' }),
  status: z.optional(z.boolean()),
  buyValue: z.number().int().positive(),
});

export type Vehicle = z.infer<typeof VehicleSchama>;

export default VehicleSchama;
