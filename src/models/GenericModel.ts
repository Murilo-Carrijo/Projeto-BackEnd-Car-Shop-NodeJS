import { Model as M } from 'mongoose';
import { Model } from '../interfaces/ModelInterface';

export default abstract class GenericModel<T> implements Model<T> {
  protected _modelMongoose: M<T>;
  
  constructor(modelMongoose: M<T>) {
    this._modelMongoose = modelMongoose;
  }

  async create(entity: T): Promise<T> {
    return this._modelMongoose.create(entity);
  }

  async read(): Promise<T[]> {
    return this._modelMongoose.find();
  }

  async readOne(id: string): Promise<T | null> {
    return this._modelMongoose.findById(id);
  }

  async update(id: string, entity: T): Promise<T | null> {
    return this._modelMongoose
      .findOneAndUpdate({ _id: id }, entity, { returnOriginal: false });
  }

  delete(id: string): Promise<T | null> {
    return await this._modelMongoose.findByIdAndDelete({ _id: id });
  }
}