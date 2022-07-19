import express, { application } from "express";
import { connectToPostgres } from "./configuration/postgres.connection";
import { registerMiddlewares } from "./routes/routes";
// import { AuthGuard } from "./utility/authourization.middleware";

export const startServer = async () => {
  try {
    const app = express();
    // app.use(AuthGuard(["/user/register"]));
    // app.use(["/patient"]);
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
