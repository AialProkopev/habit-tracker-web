import { CONFIG } from "@/shared/config";
import { createOpenApiHttp } from "openapi-msw";
import { ApiPaths } from "../schema";

export const http = createOpenApiHttp<ApiPaths>({
  baseUrl: CONFIG.API_BASE_URL,
});
