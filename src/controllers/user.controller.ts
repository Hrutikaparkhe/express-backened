// import { User } from "../models/user.model";
import { IUser, ICredentials } from "../types/user.types";
import { EUserResponse, UserResponse } from "../responses/user.response";
import { dbConnection } from '../../configuration/postgres.connection'
// import { FamilyData } from "../models/familyData.model";
const User = dbConnection.dbModels.User
const FamilyData = dbConnection.dbModels.FamilyData
const PersonalData = dbConnection.dbModels.PersonalData
const DocumentsData = dbConnection.dbModels.DocumentsData
console.log('>> User', User);
const create = (user: IUser) => {
  console.log('>> User', User);
  return User.create(user);
};

const getUser = (req, res) => {   res.send({users: User.findAll()}) };
const updateUser = async (user: ICredentials, registeredUser: IUser) => {
  const result = await User.update(user, { where: { id: user.id } });
  return result;
};
const deleteUser = async (id: number) => {
  const result = await User.destroy({ where: { id: id } });
  return result;
};
const getOne = async (email: string) => {
  const user = await User.findOne({ where: { email: email } });
  return user;
};
const getAll = async (UserId:number|string) =>{
  var query = { where: {id: UserId},
  // include: [ 
    include: [{ all: true, nested: true }]
    // {model: FamilyData, as: 'FamilyInfos'},{model:PersonalData,as:"PersonalInfos"},{model:DocumentsData, as:"DocumentsDatas"}
  }
  const user = await User.findOne(query)
  console.log('>> user', user);
  return user
}

export default {
  create,
  getUser,
  updateUser,
  deleteUser,
  getOne,
  getAll
};
