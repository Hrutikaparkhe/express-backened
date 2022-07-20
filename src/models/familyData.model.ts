const { DataTypes } = require("sequelize");
import postgres from "../../configuration/postgres.connection";

export const FamilyData = postgres.define(
  "FamilyInfo",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    father_name: {
      type: DataTypes.STRING,
    },

    father_age: {
      type: DataTypes.INTEGER,
    },
    father_country: {
      type: DataTypes.STRING,
    },
    mother_name: {
      type: DataTypes.STRING,
    },
    mother_age: {
      type: DataTypes.FLOAT,
    },
    mother_country: {
      type: DataTypes.STRING,
    },
    isDiabetic: {
      type: DataTypes.BOOLEAN,
    },
    isCardiac: {
      type: DataTypes.BOOLEAN,
    },
    isBlood_pressure: {
      type: DataTypes.BOOLEAN,
    },
  },
  {
    tableName: "FamilyInfo",
    timestamps: false,
  }
);
FamilyData.sync();
