import { IDocuments } from "../types/documents.types";
import { dbConnection } from '../../configuration/postgres.connection'
const DocumentsData = dbConnection.dbModels.DocumentsData
const create = (document:IDocuments) => {
  return DocumentsData.create(document);
};
const getDocs = () => DocumentsData.findAll();
const updateDocs = async (family: IDocuments) => {
  const result = await DocumentsData.update(family, {
    where: { id: family.id },
  });
  return result;
};
const deletedocs = async (id: number) => {
  const result = await DocumentsData.destroy({ where: { id: id } });
  return result;
};
export default {
  create,
  getDocs,
  updateDocs,
  deletedocs,
};
