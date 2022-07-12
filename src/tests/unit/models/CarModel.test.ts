import CarModel from '../../../models/CarModel';
import { expect } from 'chai';
import sinon, { SinonStub } from 'sinon';
import { Model } from 'mongoose';
import { carMockSuccess } from '../../mocks/CarMoks';

describe('Car Model', () => {
  describe ('Metodo insertCar', () => {
    
    before(() => {
      sinon.stub(Model, 'create').resolves(carMockSuccess);
    });

    after(() => (Model.create as SinonStub).restore());

    it('Validando o caso de sucesso', async () => {
      const carModel = new CarModel();

      const carCreated = await carModel.create(carMockSuccess);

      expect(carCreated).to.be.deep.equal(carMockSuccess);
    });
  });
});