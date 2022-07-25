const { DataTypes } = require("sequelize");
import { compare, compareSync, genSalt } from "bcrypt";
import { EUserResponse } from "../responses/user.response";
export const User = (sequelize) => {
  const UserData = sequelize.define(
    "User",
    {
      // userId: {
      //   type: DataTypes.INTEGER,
      // },
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
      },
      email: {
        type: DataTypes.STRING,
        primaryKey: true,
      },
      password: {
        type: DataTypes.STRING,
      },
      repeatPaswword: {
        type: DataTypes.STRING,
      },
    },
    {
      tableName: "User",
      timestamps: false,
    }
  );

  UserData.prototype.comparePassword = async function (password: string, cb) {
    console.log(password, this.password);
    var didMatch = await compare(password, this.password);
    console.log(didMatch);
    return cb(this);
  };

  return UserData;
};

// User.sync();
