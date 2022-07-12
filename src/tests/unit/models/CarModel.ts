import CarModel, { carSchema } from './../../../models/CarModel';
import { expect } from 'chai';
import sinon, { SinonStub } from 'sinon';

const carMock : carSchema.Car = {
  model: 'Santana',
  year: 1998,
  color: 'Azul',
  status: true,
  buyValue: 10.437,
  doorsQty: 4,
  seatsQty: 5,
}

describe('Car Model', () => {
  describe ('Create Car', () => {
    
    before(() => {
      sinon.stub(carSchema.modelMongoose, 'create').resolves(carMock);
    });

    after(() => {
      carSchema.modelMongoose.create.restore();
    });

    it('Adicionando carro ao DB com sucesso', async () => {
      const carModel = new CarModel(carSchema.modelMongoose);

      const carCreated = await carModel.create(carMock);

      expect(carCreated).to.be.deep.equal(carMock);
    });
  });
});