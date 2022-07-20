import { IfamilyData } from "../types/familyData.types";
import { FamilyData } from "../models/familyData.model";
const create = (family: IfamilyData) => {
  return FamilyData.create(family);
};
const getFamily = () => FamilyData.findAll();
const updateFamily = async (family: IfamilyData) => {
  const result = await FamilyData.update(family, {
    where: { id: family.id },
  });
  return result;
};
const deleteFamily = async (id: number) => {
  const result = await FamilyData.destroy({ where: { id: id } });
  return result;
};
export default {
  create,
  getFamily,
  updateFamily,
  deleteFamily,
};
