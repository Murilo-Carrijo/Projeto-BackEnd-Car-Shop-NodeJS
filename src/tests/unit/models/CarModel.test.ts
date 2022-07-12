import CarModel from '../../../models/CarModel';
import { expect } from 'chai';
import sinon, { SinonStub } from 'sinon';
import { Model } from 'mongoose';

const carMock = {
  model: 'Santana',
  year: 1998,
  color: 'Azul',
  status: true,
  buyValue: 10.437,
  doorsQty: 4,
  seatsQty: 5,
}

describe('Car Model', () => {
  describe ('Metodo insertCar', () => {
    
    before(() => {
      sinon.stub(Model, 'create').resolves(carMock);
    });

    after(() => (Model.create as SinonStub).restore());

    it('Validando o caso de sucesso', async () => {
      const carModel = new CarModel();

      const carCreated = await carModel.create(carMock);

      expect(carCreated).to.be.deep.equal(carMock);
    });
  });
});