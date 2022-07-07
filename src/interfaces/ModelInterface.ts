export interface Model<T> {
  create(payload: T): Promise<T>;
  read(): Promise<T[]>;
  readOne(_id: string): Promise<T | null>;
  update(_id: string, payload: T): Promise<T | null>;
  delete(_id: string): Promise<T | null>;
}
 
// create(): deve receber um objeto do tipo Te retornar uma Promise do tipo T.
// read(): deve retornar uma Promise contendo um array de objetos do tipo T.
// readOne(): deve receber uma string e retornar uma Promise do tipo T ou nula.
// update(): deve receber uma string e um objeto do tipo T e retornar uma Promise do tipo T ou nula.
// delete(): deve receber uma string e retornar uma Promise do tipo T ou nula.
// O arquivo deve ficar no diretório /src/interfaces/ e ter o nome de ModelInterface.ts.
// A interface deve ser exportada com o nome de Model e não deve ser exportada de forma padrão.
