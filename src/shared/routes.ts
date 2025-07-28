export const ROUTES = {
  HOME: "/",
  LOGIN: "/login",
  REGISTER: "/register",
  TODAY: "/today",
  PROJECT: "/project/:projectId",
} as const;

export type PathParams = {
  [ROUTES.PROJECT]: {
    projectId: string;
  };
};

declare module "react-router" {
  interface Register {
    params: PathParams;
  }
}
