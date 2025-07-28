import { CONFIG } from "@/shared/config";
import createFetchClient from "openapi-fetch";
import createClient from "openapi-react-query";
import { ApiPaths } from "./schema";

export const fetchClient = createFetchClient<ApiPaths>({
  baseUrl: CONFIG.API_BASE_URL,
});

export const rqClient = createClient(fetchClient);

fetchClient.use({
  onRequest({ request }) {
    const token = localStorage.getItem("token");

    if (token) {
      request.headers.set("Authorization", `Bearer ${token}`);
    }
  },
});
