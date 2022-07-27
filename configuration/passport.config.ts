import { dbConnection } from "./postgres.connection";
import { Model } from "sequelize/types";
const LocalStrategy = require("passport-local").Strategy;
export default (passport: any) => {
  console.log(">> dbConnection.sequelize", dbConnection.sequelize.models.User);
  const User = dbConnection.dbModels.User

  return passport.use(
    new LocalStrategy({ usernameField: "email" }, function (
      email: string,
      password: string,
      done: any
    ) {
      console.log("&&", password);
      console.log(">> email", email);
      console.log(">> password", password);
      return User.findOne({where :{email : email}})
        .then((user: Model<{ comparePassword: (password, cb) => {} }>) => {
          console.log(">> user%", user);
          if (!user) {
            return done(null, false);
          }
          (user as any).comparePassword(password, (userData) => {
            console.log(">> userData", userData);
            if(!userData){
              return done(null, null)
            }
           else{
            return done(null, userData);
           }
           
          });
        })
     
        .catch((err) => {
          console.log(">> err", err);
        });
    })
  );

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
