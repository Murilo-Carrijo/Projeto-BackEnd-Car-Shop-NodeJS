import { NextFunction, Request, Response } from 'express';
import CustomError from '../errors/CustomError';

function error(err: Error, req: Request, res: Response, _next: NextFunction) {
  if (err instanceof CustomError) {
    return res.status(err.statusCode).json({ error: err.message });
  }
  return res.status(500).json({ error: 'internal error' });
}

export default error;