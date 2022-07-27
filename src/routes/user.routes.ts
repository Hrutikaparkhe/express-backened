import { NextFunction, Request, Response, Router } from "express";
import passport from "passport";
import { ResponseHandler } from "../../utility/response-handler";
import userService from "../services/user.service";
import { IUser, ICredentials } from "../types/user.types";
import passportJWTConfig from "../../configuration/passportJWT.config";
import userRepo from "../controllers/user.controller";

import { EUserResponse, UserResponse } from "../responses/user.response";
const router = Router();

router.get("/check", (req, res) => res.send({ msg: "log in successful" }));
router.put("/:id", async (req, res, next) => {
  try {
    const user = req.body as ICredentials;
    const registeredUser = req.body as IUser;
    const result = await userService.updateUSer(user, registeredUser);
    res.send(new ResponseHandler(result));
  } catch (e) {
    next(e);
  }
});
router.delete("/:id", async (req, res, next) => {
  try {
    const user = req.body as ICredentials;
    let { id } = req.params;
    const result = await userService.deleteUser(Number(id));
    res.send(new ResponseHandler({ msg: "user deleted succesfully" }));
  } catch (e) {
    next(e);
  }
});

export const authenticateWithJWT = (req, res, callback) => {
  return passportJWTConfig(passport).authenticate("jwt", (err, user) => {
    console.log(">> err", err);
    console.log(">> user", user);
    if (err || !user) {
      res.send({
        status: 401,
        message: "Unauthorized Access",
      });
    }
    callback();
  })(req, res);
};

router.get("/error", async (req, res, next) => {
  try {
    res.send({ error: "something went wrong", r: req.headers });
  } catch (error) {
    next(error);
  }
});

router.get("/getallinfo/:id", async (req, res, next) => {
  try {
    let { id } = req.params;
    const result = await userService.getAll(Number(id));
    res.send(new ResponseHandler(result));
  } catch (e) {
    next(e);
  }
});


export default router;
