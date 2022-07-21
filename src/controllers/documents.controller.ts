import { IDocuments } from "../types/documents.types";
import { DocumentsData } from "../models/documents.model";
const create = (family: IDocuments) => {
  return DocumentsData.create(family);
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
