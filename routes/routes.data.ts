import { IRoute } from "./routes.types";
import UserRouter from "../src/routes/user.routes";
import PersonRouter from "../src/routes/personalData.routes";
export const routes: IRoute[] = [
  {
    path: "/user",
    router: UserRouter,
  },
  {
    path: "/person",
    router: PersonRouter,
  },
];
