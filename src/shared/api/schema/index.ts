import { components, paths } from "./generated";

export type ApiPaths = paths;
export type ApiSchemas = components["schemas"];

export type ApiProject = ApiSchemas["Project"];
export type ApiAuthResponse = ApiSchemas["AuthResponse"];
export type ApiUserData = ApiSchemas["VerifyAccessTokenResponse"];
