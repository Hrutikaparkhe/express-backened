import { NextFunction, Request, Response, Router } from "express";
import passportConfig from "../../configuration/passport.config";
import passport from "passport";
import { ResponseHandler } from "../../utility/response-handler";
import userService from "../services/user.service";
import { IUser, ICredentials } from "../types/user.types";
import { getToken } from "../../utility/token";
import passportJWTConfig from "../../configuration/passportJWT.config";
import { EUserResponse, UserResponse } from "../responses/user.response";
const loginRouter = Router();

loginRouter.post("/login", (req, res) => {
  passportConfig(passport).authenticate(
    "local",
    async function (err, userData) {
      console.log(">> res", userData);
      try {
        console.log('>> userData.email', userData.email,userData.password);
        if (userData) {
          console.log(getToken(userData.dataValues));
          var token = getToken(userData.dataValues);
          console.log(">> token", token);
        return  res.send({ token });
        }
         return res.send({
          msg: "user not exist.Login Failed"
         });
      } catch (e) {
        await res.send(new ResponseHandler(EUserResponse.LOGIN_FAILED));
      }
    }
  )(req, res);
});
loginRouter.post("/register", async (req, res, next) => {
  try {
    const patient = req.body as IUser;
    console.log(patient);
    const result = await userService.create(patient);
    res.send(new ResponseHandler(result));
  
  } catch (e) {
    console.log(e);
    next(e);
  }
});
export default loginRouter;
