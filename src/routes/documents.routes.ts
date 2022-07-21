import documentsService from "../services/documents.service";
import { IDocuments } from "../types/documents.types";
import { ResponseHandler } from "../../utility/response-handler";
import { Router } from "express";
import path from "path";
// var multer = require("multer");
import multer from "multer";

const documentsRouter = Router();
documentsRouter.get("/file/:filename", (req, res, next) => {
  const { filename } = req.params;
  const dirname = path.resolve();
  const fullfilepath = path.join(dirname, "files/" + filename);
  res.sendFile(fullfilepath);
});

documentsRouter.post(
  "/file",
    documentsService.fileUpload.single("file"),

  (req, res, next) => {
    if (!req.file || Object.keys(req.file).length === 0) {
      return res.status(400).send("No files were uploaded.");
    }
    if (!req.file?.originalname.match(/\.(pdf|doc|docx)$/)) {
      return res.status(400).send("Invalid file");
    }
    console.log("fileu", req.file);
    console.log("fileu", req.body);
    res.json("/file api");
  }
);

export default documentsRouter;
