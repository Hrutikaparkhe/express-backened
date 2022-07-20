import personalDataService from "../services/personalData.service";
import { PersonalData } from "../models/personalData.model";
import { IPersonalInfo } from "../types/personalData.types";
import { Router } from "express";
import { ResponseHandler } from "../../utility/response-handler";
const router = Router();
router.post("/register", async (req, res, next) => {
  try {
    const person = req.body as IPersonalInfo;
    console.log(person);
    const result = await personalDataService.create(person);
    res.send(new ResponseHandler(result));
  } catch (e) {
    console.log(e);

    next(e);
  }
});
router.get("/", async (req, res, next) => {
  try {
    const person = req.body as IPersonalInfo;
    const result = await personalDataService.getPerson();
    res.send(new ResponseHandler(result));
  } catch (e) {
    next(e);
  }
});
router.put("/:id", async (req, res, next) => {
  try {
    const person = req.body as IPersonalInfo;
    const registeredUser = req.body as IPersonalInfo;
    const result = await personalDataService.updatePerson(person);
    res.send(new ResponseHandler(result));
  } catch (e) {
    next(e);
  }
});
router.delete("/:id", async (req, res, next) => {
  try {
    let { id } = req.params;
    const result = await personalDataService.deletePerson(Number(id));
    res.send(new ResponseHandler(result));
  } catch (e) {
    next(e);
  }
});
export default router;
