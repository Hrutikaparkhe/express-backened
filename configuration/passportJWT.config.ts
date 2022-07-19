import { PassportStatic } from "passport";
import { Strategy } from "passport-local";
import { Application } from "express";
import userService from "../src/services/user.service";
import userRepo from "../src/controllers/user.controller";
import { User } from "../src/models/user.model";
import { Model } from "sequelize/types";
// const { DataTypes } = require("sequelize");
var JwtStrategy = require('passport-jwt').Strategy,
ExtractJwt = require('passport-jwt').ExtractJwt;

export default (passport: any) => {
    var opts:{
        jwtFromRequest?:() =>{},
        secretOrKey?:string
    } = {}
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = 'secret';
console.log('>> opts', opts);
 return  passport.use(
    new JwtStrategy(opts,function (jwt_payload:any, done: any) {
      console.log("&&",jwt_payload);

      User.findByPk(jwt_payload.email).then(user =>{
        console.log('>> user', user);
      })
      
      }))
    


  // passport.serializeUser((user: any, done) => {
  //   done(null, user.email);
  // });

  // passport.deserializeUser(async (email: any, done) => {
  //   // TODO: Fetch user from DB
  //   const user = await userRepo.getOne(email);
  //   if (user) done(null, user);
  //   else done(null, false);
  // });
};
