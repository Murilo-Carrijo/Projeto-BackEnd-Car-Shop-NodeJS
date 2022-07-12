import { NextFunction, Request, Response } from 'express';
import CustomError from '../errors/CustomError';

function error(err: Error, req: Request, res: Response, _next: NextFunction) {
  if (err instanceof CustomError) {
    return res.status(err.statusCode).json({ message: err.message });
  }
  return res.status(500).json({ message: 'internal error' });
}

export default error;