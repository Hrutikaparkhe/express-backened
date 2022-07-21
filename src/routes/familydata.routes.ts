import familyDataService from "../services/familyData.service";
import { IfamilyData } from "../types/familyData.types";
import { ResponseHandler } from "../../utility/response-handler";
import { Router } from "express";
const familyrouter = Router();
familyrouter.post("/registerfamilydata", async (req, res, next) => {
  try {
    const person = req.body as IfamilyData;
    console.log(person);
    const result = await familyDataService.create(person);
    res.send(new ResponseHandler(result));
  } catch (e) {
    console.log(e);
    next(e);
  }
});
familyrouter.get("/familydata", async (req, res, next) => {
  try {
    const family = req.body as IfamilyData;
    const result = await familyDataService.getFamily();
    res.send(new ResponseHandler(result));
  } catch (e) {
    next(e);
  }
});
familyrouter.put("/editfamilydata/:id", async (req, res, next) => {
  try {
    const family = req.body as IfamilyData;
    const registeredUser = req.body as IfamilyData;
    const result = await familyDataService.updateFamily(family);
    res.send(new ResponseHandler(result));
  } catch (e) {
    next(e);
  }
});
familyrouter.delete("/deletefamilydata/:id", async (req, res, next) => {
  try {
    let { id } = req.params;
    const result = await familyDataService.deleteFamily(Number(id));
    res.send(new ResponseHandler(result));
  } catch (e) {
    next(e);
  }
});
export default familyrouter;
