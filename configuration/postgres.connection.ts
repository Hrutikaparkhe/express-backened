import { Sequelize } from "sequelize";
const { DB_NAME, DB_HOST, DB_PASSWORD, DB_USERNAME } = process.env;
import addAssociation from "../src/models/index.model";
import { DocumentsData } from "../src/models/documents.model";
import { FamilyData } from "../src/models/familyData.model";
import { PersonalData } from "../src/models/personalData.model";
import { User } from "../src/models/user.model";

const sequelize = new Sequelize(
  DB_NAME as string,
  DB_USERNAME as string,
  DB_PASSWORD as string,
  {
    host: DB_HOST as string,
    port: 5432,
    dialect: "postgres",
  }
);

let dbModels: any = {};
dbModels.sequelize = sequelize;
dbModels.Sequelize = Sequelize;

export const connectToPostgres = async () => {
  try {
    return true;
  } catch (e) {
    console.log(e);
    throw { message: "COULD NOT CONNECT TO POSTGRES" };
  }
};
dbModels.DocumentsData = DocumentsData(sequelize);
dbModels.FamilyData = FamilyData(sequelize);
dbModels.PersonalData = PersonalData(sequelize);
dbModels.User = User(sequelize);
addAssociation(sequelize);
//  syncModels(sequelize);
sequelize.authenticate();
dbModels.sequelize.sync().then(() => {
  console.log("POSTGRES CONNECTED SUCCESSFULLY");
});

export const dbConnection = { sequelize, dbModels };
