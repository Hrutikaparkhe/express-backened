import express, { application } from "express";
import { connectToPostgres } from "./configuration/postgres.connection";
import { registerMiddlewares } from "./routes/routes";
import router from "./src/routes/user.routes";
import authenticateWithJWT from "./src/routes/user.routes";

export const app = express();

export const startServer = async () => {
  try {
    await connectToPostgres();
    const PORT = process.env.PORT;
    registerMiddlewares(app);
    app.listen(PORT, () => {
      console.log(`Server Started at ${PORT}`);
    });
  } catch (e) {
    console.log(e);
    console.log("SOMETHING WENT WRONG");
    process.exit(1);
  }
};
