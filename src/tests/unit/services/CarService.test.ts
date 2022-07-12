// import { expect } from 'chai';
// import sinon, { SinonStub } from 'sinon';
// import CarModel from '../../../models/CarModel';
// import CarService from '../../../services/CarService';
// import { carMockSuccess } from '../../mocks/CarMoks';

// describe('Car Model', () => {
//   describe ('Metodo insertCar', () => {
//     const carModel = new CarModel();
    
//     before(() => {
//       sinon.stub(carModel.create, 'insertCar').resolves(carMockSuccess);
//     });

//     after(() => (carModel.create as SinonStub).restore());

//     it('Validando o caso de sucesso', async () => {
//       const carModel = new CarModel();

//       const carCreated = await carModel.create(carMockSuccess);

//       expect(carCreated).to.be.deep.equal(carMockSuccess);
//     });
//   });
// });