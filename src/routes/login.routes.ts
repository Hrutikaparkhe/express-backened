import { NextFunction, Request, Response, Router } from "express";
import passportConfig from "../../configuration/passport.config";
import passport from "passport";
import { ResponseHandler } from "../../utility/response-handler";
import userService from "../services/user.service";
import { IUser, ICredentials } from "../types/user.types";
import { getToken } from "../../utility/token";
import passportJWTConfig from "../../configuration/passportJWT.config";
import { EUserResponse } from "../responses/user.response";
const loginRouter = Router();

loginRouter.post("/login", (req, res) => {
    passportConfig(passport).authenticate(
      "local",
      async function (err, userData) {
        console.log(">> res", userData);
        try {
          if (userData) {
            console.log(getToken(userData.dataValues));
            var token = getToken(userData.dataValues);
            console.log(">> token", token);
            await res.send({ token });
          }
        } catch (e) {
          await res.send(new ResponseHandler(EUserResponse.LOGIN_FAILED));
        }
        // if (res) {
        //   console.log(getToken(res.dataValues));
        //   await res.send(new ResponseHandler(EUserResponse.LOGIN_SUCCESS));
        // }
      }
    )(req, res);
  });
  export default loginRouter