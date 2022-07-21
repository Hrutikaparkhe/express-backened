import { User } from "../src/models/user.model";
import { Model } from "sequelize/types";
// const { DataTypes } = require("sequelize");
var JwtStrategy = require("passport-jwt").Strategy,
  ExtractJwt = require("passport-jwt").ExtractJwt;

export default (passport: any) => {
  var opts: {
    jwtFromRequest?: () => {};
    secretOrKey?: string;
  } = {};
  opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
  opts.secretOrKey = "secret";
  console.log(">> opts", opts);
  return passport.use(
    new JwtStrategy(opts, function (jwt_payload: any, done: any) {
      console.log("&&", jwt_payload);
      
      User.findByPk(jwt_payload.email).then((user) => {
        if(user){
        return  done(null, user)        
        }
        return done(true, null)
      }).catch(err =>{throw err})
    })
  );
};
