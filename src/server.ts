import { NextFunction } from 'express';
import App from './app';
import carRouter from './routes/CarRoutes';
import error from './middleware/ErrorMiddleware';

const server = new App();
server.addRouter(carRouter);
server.addMiddleware(error as unknown as NextFunction);

export default server;
