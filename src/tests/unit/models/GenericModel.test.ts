import CarModel from '../../../models/CarModel';
import { expect } from 'chai';
import sinon, { SinonStub } from 'sinon';
import { Model } from 'mongoose';
import { carMockSuccess } from '../../mocks/CarMoks';
import { Types } from 'mongoose';

const id = new Types.ObjectId();

const carModel = new CarModel();

describe('Car Model', () => {
  describe ('Metodo create', () => {
    before(() => {
      sinon.stub(Model, 'create').resolves(carMockSuccess);
    });

    after(() => (Model.create as SinonStub).restore());

    it('Validando o caso de sucesso', async () => {

      const carCreated = await carModel.create(carMockSuccess);

      expect(carCreated).to.be.deep.equal(carMockSuccess);
    });
  });

  describe ('Metodo read', async () => {
    before(() => {
      sinon.stub(Model, 'find').resolves([carMockSuccess]);
    });

    after(() => (Model.find as SinonStub).restore());

    it('Validando o caso de sucesso', async () => {
      const cars = await carModel.read();

      expect(cars).to.be.an('array');
    });
  });

  describe ('Metodo readOne', async () => {
    before(() => {
      sinon.stub(Model, 'findOne').resolves(carMockSuccess);
    });

    after(() => (Model.findOne as SinonStub).restore());

    it('Validando o caso de sucesso', async () => {
      const cars = await carModel.readOne(id.toString());

      expect(cars).to.be.an('object').and.to.haveOwnProperty('model', 'Santana');
    });
  });

  describe ('Metodo update', async () => {
    const carUpdate = { ...carMockSuccess, status: true };
    before(() => {
      sinon.stub(Model, 'findOneAndUpdate').resolves(carMockSuccess);
    });

    after(() => (Model.findOneAndUpdate as SinonStub).restore());

    it('Validando o caso de sucesso', async () => {
      const cars = await carModel.update(id.toString(), carUpdate);

      expect(cars).to.be.an('object');
    });
  });

  describe ('Metodo delete', async () => {
    before(() => {
      sinon.stub(Model, 'findOneAndDelete').resolves(carMockSuccess);
    });

    after(() => (Model.findOneAndDelete as SinonStub).restore());

    it('Validando o caso de sucesso', async () => {
      const cars = await carModel.delete(id.toString());

      expect(cars).to.be.an('object');
    });
  });

});