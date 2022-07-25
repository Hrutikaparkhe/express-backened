import { IDocuments } from "../types/documents.types";
import { DocumentsData } from "../models/documents.model";
import documentsRepo from "../controllers/documents.controller";
import multer from "multer";
import path from "path";

const create = async (documents:IDocuments) => {
  const data = await documentsRepo.create(documents);
  return {
    data: data,
  };
};

const getDocs = () => {
  return documentsRepo.getDocs();
};
const updateDocs = async (documents: IDocuments) => {
  return documentsRepo.updateDocs(documents);
};

var fileUpload = multer.diskStorage({
  destination: "public/uploads",
  filename: function (req, file, callback) {
    callback(
      null,
      new Date().toISOString().replace(/:/g, "-") + file.originalname
    );
  },
});
var uploadFiles = multer({ storage: fileUpload });
var multipleUpload = uploadFiles.fields([
  { name: "adharcardfront", maxCount: 1 },
  { name: "adharcardback", maxCount: 1 },
  { name: "medicalreportfront", maxCount: 1 },
  { name: "medicalreportback", maxCount: 1 },
]);
const deleteDocs = (id: number) => documentsRepo.deletedocs(id);
export default {
  create,
  getDocs,
  updateDocs,
  deleteDocs,
  fileUpload,
  multipleUpload,
};
