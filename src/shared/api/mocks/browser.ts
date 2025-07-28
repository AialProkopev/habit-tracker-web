import { setupWorker } from "msw/browser";
import { projectsHandlers } from "./handlers/projects";
import { authHandlers } from "./handlers/auth";

export const worker = setupWorker(...projectsHandlers, ...authHandlers);
