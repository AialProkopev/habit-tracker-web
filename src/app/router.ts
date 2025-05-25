import { createBrowserRouter, redirect } from "react-router";

import App from "./app";

import { ROUTES } from "@/shared/routes";

export const router = createBrowserRouter([
  {
    path: ROUTES.HOME,
    Component: App,
    children: [
        {
            path: ROUTES.LOGIN,
            lazy: () => import("@/features/auth/login.page"),
        },      
        {
          path: ROUTES.SIGNUP,
          lazy: () => import("@/features/auth/signup.page"),
        },
        {
          path: ROUTES.TODAY,
          lazy: () => import("@/features/today/today.page")
        },
        {
          path: ROUTES.HOME,
          loader: () => redirect(ROUTES.TODAY)
        },
        
    ],
  },
])
