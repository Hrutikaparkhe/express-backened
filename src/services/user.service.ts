import { IUser, ICredentials } from "../types/user.types";
import userRepo from "../controllers/user.controller";
import { EUserResponse, UserResponse } from "../responses/user.response";
import { sign } from "jsonwebtoken";
import { compare, genSalt, hash, hashSync } from "bcrypt";
import { genSaltSync } from "bcryptjs";
import { User } from "../models/user.model";

const create = async (user: IUser) => {
  const userExists = await userRepo.getOne(user.email);
  if (userExists) {
    throw UserResponse[EUserResponse.USER_ALREADY_REGISTERED];
  } else if (user.password === user.repeatPaswword) {
    const salt = await genSalt(10);
    const hashedPassword = await hashSync(user.password, genSaltSync(10));
    user.password = hashedPassword;
    const createdUserData = userRepo.create(user);
    return createdUserData;
  } else {
    throw UserResponse[EUserResponse.NOT_ACCEPTABLE];
  }
};
const updateUSer = async (user: ICredentials, registeredUser: IUser) => {
  if (user.password === user.repeatPaswword && !user.email) {
    const salt = await genSalt(10);
    const hashedPassword = await hash(user.password, salt);
    user.password = hashedPassword;
    return userRepo.updateUser(user, registeredUser);
  } else if (user.email) {
    throw UserResponse[EUserResponse.CANNOT_UPDATE];
  } else {
    throw UserResponse[EUserResponse.NOT_ACCEPTABLE];
  }
};

const getToken = (user: any) => {
  if (!user) throw UserResponse[EUserResponse.LOGIN_FAILED];
  return { token: sign(user, process.env.SECRET_KEY || "") };
};

const deleteUser = (id: number) => {
  userRepo.deleteUser(id);
};
const getAll = (UserId:string|number)=>{
  return userRepo.getAll(UserId)
}
export default {
  create,
  updateUSer,
  deleteUser,
  getToken,
  getAll
};
