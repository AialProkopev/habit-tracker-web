import { rqClient } from "@/shared/api/instance";
import { ApiUserData } from "@/shared/api/schema";
import React, { createContext } from "react";

const AuthProviderContext = createContext<{ isAuthenticated: boolean; userData: ApiUserData } | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [token, setToken] = React.useState<string | undefined>();
  const { data: userData, isError } = rqClient.useQuery("get", "/auth/verify");

  React.useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      setToken(token);
    }
  }, []);

  console.log(userData, isError, token);

  return <AuthProviderContext.Provider value={undefined}>{children}</AuthProviderContext.Provider>;
}
