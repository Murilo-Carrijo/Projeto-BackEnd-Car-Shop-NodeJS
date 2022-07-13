import CustomError from './CustomError';

export default class NotFound extends CustomError {
  constructor(message: string) {
    super(message, 404);
  }
}