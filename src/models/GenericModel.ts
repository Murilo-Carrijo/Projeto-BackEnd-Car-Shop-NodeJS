import { Model as M, Document, isValidObjectId } from 'mongoose';
import { Model } from '../interfaces/ModelInterface';

export default abstract class GenericModel<T> implements Model<T> {
  protected _modelMongoose: M<T & Document>;
  
  constructor(modelMongoose: M<T & Document>) {
    this._modelMongoose = modelMongoose;
  }

  async create(entity: T): Promise<T> {
    return this._modelMongoose.create(entity);
  }

  async read(): Promise<T[]> {
    return this._modelMongoose.find();
  }

  async readOne(id: string): Promise<T | null> {
    if (!isValidObjectId(id)) return null;
    return this._modelMongoose.findById(id);
  }

  async update(id: string, entity: T): Promise<T | null> {
    if (!isValidObjectId(id)) return null;
    return this._modelMongoose
      .findOneAndUpdate({ _id: id }, entity, { returnOriginal: false });
  }

  async delete(id: string): Promise<T | null> {
    if (!isValidObjectId(id)) return null;
    return this._modelMongoose.findByIdAndDelete({ _id: id });
  }
}