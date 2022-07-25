import { Application, json, NextFunction } from "express";
// import { routes } from "./routes.data";
import { Request, Response } from "express";
import { ResponseHandler } from "../utility/response-handler";
import initPassport from "../configuration/passport.config";
import passport from "passport";
import session from "express-session";
import router, { authenticateWithJWT } from "../src/routes/user.routes";
import familyrouter from "../src/routes/familydata.routes";
import personalRouter from "../src/routes/personalData.routes";
import documentsRouter from "../src/routes/documents.routes";
import loginRouter from "../src/routes/login.routes";
export const registerMiddlewares = (app: Application) => {
  app.use(json());

  initPassport(passport);
  app.use("/api/v1",loginRouter)
  app.use("/api/v1", authenticateWithJWT,router);
  app.use("/api/v1", authenticateWithJWT, familyrouter);
  app.use("/api/v1", authenticateWithJWT, personalRouter);
  app.use("/api/v1", authenticateWithJWT, documentsRouter);
  app.use(
    session({
      secret: "secret",
      resave: false,
      saveUninitialized: false,
    })
  );
  app.use(passport.initialize());
  app.use(passport.session());
  app.use((err: any, req: Request, res: Response, next: NextFunction) => {
    res.status(err.statusCode || 500).send(new ResponseHandler(null, err));
  });
};
