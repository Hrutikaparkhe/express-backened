const { DataTypes } = require("sequelize");
import { compare, compareSync, genSalt } from "bcrypt";
import { EUserResponse } from "../responses/user.response";
export const User = (sequelize) => {
  const UserData = sequelize.define(
    "User",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      email: {
        type: DataTypes.STRING,
        unique: true,
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
    console.log(">> didMatch", didMatch);
    if (!didMatch) {
      return cb(null);
    } else {
      return cb(this);
    }
  };

  return UserData;
};

// User.sync();
