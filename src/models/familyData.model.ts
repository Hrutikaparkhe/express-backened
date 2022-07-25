const { DataTypes } = require("sequelize");

export const FamilyData = (sequelize) =>
  sequelize.define(
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
      UserEmail: {
        type: DataTypes.STRING,
      },
    },
    {
      tableName: "FamilyInfo",
      timestamps: false,
    }
  );

