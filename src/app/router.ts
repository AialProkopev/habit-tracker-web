import { createBrowserRouter, redirect } from "react-router";

import App from "./app";

import { ROUTES } from "@/shared/routes";
import { MainLayout } from "@/features/main";

export const router = createBrowserRouter([
  {
    Component: App,
    children: [
      {
        path: ROUTES.HOME,
        Component: MainLayout,
        children: [
          {
            path: ROUTES.TODAY,
            lazy: () => import("@/features/today/today.page"),
          },
          {
            path: ROUTES.HOME,
            loader: () => redirect(ROUTES.TODAY),
          },
          {
            path: ROUTES.PROJECT,
            lazy: () => import("@/features/project/project.page"),
          },
        ],
      },
      {
        path: ROUTES.LOGIN,
        lazy: () => import("@/features/auth/login.page"),
      },
      {
        path: ROUTES.REGISTER,
        lazy: () => import("@/features/auth/register.page"),
      },
    ],
  },
]);
