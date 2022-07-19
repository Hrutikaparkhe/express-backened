import { IRoute } from "./routes.types";
import UserRouter from "../src/routes/user.routes";
export const routes: IRoute[] = [
  {
    path: "/user",
    router: UserRouter,
  },
];
