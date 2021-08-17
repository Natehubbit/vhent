import { ROUTES } from "../common/constants";

export type AppRoute =
  typeof ROUTES[keyof typeof ROUTES]["path"];

export type RouteKey = keyof typeof ROUTES;
