import { ROUTES } from "../common/constants";

export type AppRoute =
  typeof ROUTES[keyof typeof ROUTES]["path"];
