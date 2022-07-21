const { DataTypes } = require("sequelize");
import postgres from "../../configuration/postgres.connection";
export const DocumentsData = postgres.define(
  "DocumentsData",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    file: {
      type: DataTypes.STRING,
    },
  },
  {
    tableName: "DocumentsData",
    timestamps: false,
  }
);
DocumentsData.sync();
