import { IPersonalInfo } from "../types/personalData.types";
import personRepo from "../controllers/personalData.controller";
import moment from "moment";
const create = async (person: IPersonalInfo) => {
  // var new_date=  new Date(person.d_o_b)
  // person.d_o_b=new_date.getDate
  person.BMI = (person.weight / person.height) * 703;
  const createdPersonData = personRepo.create(person);
  return createdPersonData;
};
const getPerson = () => {
  return personRepo.getPerson();
};
const updatePerson = async (person: IPersonalInfo) => {
  return personRepo.updatePerson(person);
};
const deletePerson = (id: number) => personRepo.deletePerson(id);
export default {
  create,
  getPerson,
  updatePerson,
  deletePerson,
};
