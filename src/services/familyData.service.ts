import { IfamilyData } from "../types/familyData.types";
import { FamilyData } from "../models/familyData.model";
import familyRepo from "../controllers/familyData.controller";
const create = async (family: IfamilyData) => {
  const createdPersonData = familyRepo.create(family);
  return createdPersonData;
};
const getFamily = () => {
  return familyRepo.getFamily();
};
const updateFamily = async (family: IfamilyData) => {
  return familyRepo.updateFamily(family);
};
const deleteFamily = (id: number) => familyRepo.deleteFamily(id);
export default {
  create,
  getFamily,
  updateFamily,
  deleteFamily,
};
