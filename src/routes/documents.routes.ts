import documentsService from "../services/documents.service";
import { IDocuments } from "../types/documents.types";
import { ResponseHandler } from "../../utility/response-handler";
import { Router } from "express";
import path from "path";
import { EUserResponse } from "../responses/user.response";

const documentsRouter = Router();
documentsRouter.get("/file/:filename", (req, res) => {
  const { filename } = req.params;
  const dirname = path.resolve();
  const fullfilepath = path.join(dirname, "files/" + filename);
  res.sendFile(fullfilepath);
});

documentsRouter.post("/file", documentsService.multipleUpload, (req, res) => {
  try {
    if (req.files) {
      const obj = req.files;
      let obj2: IDocuments = {};
      console.log(">> obj", obj);
      Object.keys(obj).map(function (key, index) {
        obj2[obj[key][0].fieldname] = obj[key][0].path;
      });
      console.log(">> obj2", obj2);
      const result = documentsService.create(obj2);
      res.send({ msg: "file uploaded successfully" });
    }
  } catch (e) {
    res.send(new ResponseHandler(EUserResponse.LOGIN_FAILED));
  }
});

export default documentsRouter;
