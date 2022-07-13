import { NextFunction, Request, Response } from 'express';
import * as sinon from 'sinon';
import chai from 'chai';
import chaiHttp = require('chai-http');
import CarController from '../../../controllers/CarController';
import { carMockSuccess } from '../../mocks/CarMoks';
import { Types } from 'mongoose';
import CarService from '../../../services/CarService';


chai.use(chaiHttp);

const { expect } = chai;
const carService = new CarService();
const carController = new CarController(carService);
const id = new Types.ObjectId();

const req = {} as Request;
const res = {} as Response;
let next = () => ({}) as NextFunction;

describe('Testes para a Car Controller', () => {
  describe('Metodo insertCar', async () => {

    before(() => {
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns(res);
      req.body = carMockSuccess;
      sinon.stub(carService, 'insertCar').resolves(carMockSuccess);
      next = sinon.stub();
    });

    afterEach(() => sinon.restore());
    
    it('Validando o caso de sucesso', async () => {
      await carController.insertCar(req, res, next);

      expect((res.status as sinon.SinonStub).calledWith(201)).to.be.true;
    });
  });

  describe('Metodo read', async () => {

    before(() => {
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns(res);
      sinon.stub(carService, 'read').resolves([carMockSuccess]);
    });

    after(() => sinon.restore());

    it('Validando o caso de sucesso', async () => {
      await carController.read(req, res, next);
      
      expect((res.status as sinon.SinonStub).calledWith(200)).to.be.true;
    });
  });

  describe('Metodo readOne', async () => {

    before(() => {
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns(res);
      req.params = { id: id.toString() };
      sinon.stub(carService, 'readOne').resolves(carMockSuccess);
    });

    after(() => sinon.restore());

    it('Validando o caso de sucesso', async () => {
      await carController.readOne(req, res, next);
      
      expect((res.status as sinon.SinonStub).calledWith(200)).to.be.true;
    });
  });
})