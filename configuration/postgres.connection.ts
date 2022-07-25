import { Sequelize } from "sequelize";
const { DB_NAME, DB_HOST, DB_PASSWORD, DB_USERNAME } = process.env;
import addAssociation from "../src/models/index.model";
import { DocumentsData } from "../src/models/documents.model";
import { FamilyData } from "../src/models/familyData.model";
import { PersonalData } from "../src/models/personalData.model";
import { User } from "../src/models/user.model";
// import { User } from "../src/models/user.model";
// import { FamilyData } from "../src/models/familyData.model";
// import { PersonalData } from "../src/models/personalData.model";
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
dbModels.Sequelize = Sequelize

export const connectToPostgres = async () => {
  try {
    dbModels.DocumentsData = await DocumentsData(sequelize);
    dbModels.FamilyData = await FamilyData(sequelize);
    dbModels.PersonalData = await PersonalData(sequelize);
    dbModels.User = await User(sequelize);
    addAssociation(sequelize);
    await syncModels(sequelize);
    await sequelize.authenticate();
    await dbModels.sequelize.sync().then(() => {
      console.log("POSTGRES CONNECTED SUCCESSFULLY");
    })
    return true;
  } catch (e) {
    console.log(e);
    throw { message: "COULD NOT CONNECT TO POSTGRES" };
  }
};

const syncModels = async (sequelize) => {
  const { DocumentsData, FamilyInfo,PersonalInfo, User } = sequelize.models;
  console.log(">> DocumentsData", DocumentsData);
  await DocumentsData.sync();
  await FamilyInfo.sync();
  await PersonalInfo.sync();
  await User.sync();
};

export const dbConnection = { sequelize, dbModels };
