import { IPersonalInfo } from "../types/personalData.types";
import { PersonalData } from "../models/personalData.model";

const create = (person: IPersonalInfo) => {
  return PersonalData.create(person);
};
const getPerson = () => PersonalData.findAll();
const updatePerson = async (person: IPersonalInfo) => {
  const result = await PersonalData.update(person, {
    where: { id: person.id },
  });
  return result;
};
const deletePerson = async (id: number) => {
  const result = await PersonalData.destroy({ where: { id: id } });
  return result;
};
export default {
  create,
  getPerson,
  updatePerson,
  deletePerson,
};
