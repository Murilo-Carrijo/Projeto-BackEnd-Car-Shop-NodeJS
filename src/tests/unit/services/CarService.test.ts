import { expect } from 'chai';
import sinon, { SinonStub } from 'sinon';
import { Types } from 'mongoose';
import CarService, { model } from '../../../services/CarService';
import { carMockSuccess } from '../../mocks/CarMoks';

const carService = new CarService();

const id = new Types.ObjectId();

describe('Teste para a Car Service', () => {
  describe ('Metodo insertCar', () => {
    before(() => {
      sinon.stub(model, 'create').resolves(carMockSuccess);
    });

    after(() => (model.create as SinonStub).restore());
    
    it('Validando o caso de sucesso', async () => {
      const carCreated = await model.create(carMockSuccess);
      expect(carCreated).to.be.deep.equal(carMockSuccess);
    });
  });

  describe ('Metodo read', () => {
    before(() => {
      sinon.stub(model, 'read').resolves([carMockSuccess]);
    });

    after(() => (model.read as SinonStub).restore());
    
    it('Validando o caso de sucesso', async () => {
      const carCreated = await model.read();
      expect(carCreated).to.be.an('array');
    });
  });

  describe ('Metodo readOne', async () => {
    before(() => {
      sinon.stub(model, 'readOne').resolves(carMockSuccess);
    });

    after(() => (model.readOne as SinonStub).restore());

    it('Validando o caso de sucesso', async () => {
      const cars = await model.readOne(id.toString());

      expect(cars).to.haveOwnProperty('model', 'Santana');
    });
  });

  describe ('Metodo update', async () => {
    const carUpdate = { ...carMockSuccess, status: true };
    before(() => {
      sinon.stub(model, 'update').resolves(carMockSuccess);
    });

    after(() => (model.update as SinonStub).restore());

    it('Validando o caso de sucesso', async () => {
      const cars = await model.update(id.toString(), carUpdate);

      expect(cars).to.haveOwnProperty('model', 'Santana');
    });
  });

  describe ('Metodo delete', async () => {
    before(() => {
      sinon.stub(model, 'delete').resolves(carMockSuccess);
    });

    after(() => (model.delete as SinonStub).restore());

    it('Validando o caso de sucesso', async () => {
      const cars = await model.delete(id.toString());

      expect(cars).to.be.an('object');
    });
  });
});