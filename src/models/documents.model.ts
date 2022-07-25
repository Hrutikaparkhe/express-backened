
const { DataTypes } = require("sequelize");

export const DocumentsData = (sequelize) => sequelize.define(
  "DocumentsData",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    adharcardfront: {
      type: DataTypes.STRING,
    },
    adharcardback: {
      type: DataTypes.STRING,
    },
    medicalreportfront: {
      type: DataTypes.STRING,
    },
    medicalreportback: {
      type: DataTypes.STRING,
    },
   
  },
  {
    tableName: "DocumentsData",
    timestamps: false,
  }
);
