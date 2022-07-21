import { IDocuments } from "../types/documents.types";
import { DocumentsData } from "../models/documents.model";
import documentsRepo from "../controllers/documents.controller";
import multer from "multer";

const create = async (document: IDocuments) => {
  const data = await documentsRepo.create(document);
  return {
    // ...StuentResponse[EStudentResponse.STUDENT_ADD_SUCCESS],
    data: data,
  };
};

const getDocs = () => {
  return documentsRepo.getDocs();
};
const updateDocs = async (documents: IDocuments) => {
  return documentsRepo.updateDocs(documents);
};
const fileUpload = multer({
  storage: multer.diskStorage({
    // destination: function (req, file, cb) {
    //   cb(null, "files/");
    // },
    destination: "./services",
    filename: function (req, file, cb) {
      cb(null, new Date().valueOf() + "_" + file.originalname);
      console.log("syncceds");
    },
  }),
});
const deleteDocs = (id: number) => documentsRepo.deletedocs(id);
export default {
  create,
  getDocs,
  updateDocs,
  deleteDocs,
  fileUpload,
};
