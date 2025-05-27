import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router";
import "./index.css";
import { router } from "./router";

async function enableMocking() {
  if (import.meta.env.PROD) {
    return;
  }

  const { worker } = await import("@/shared/api/mocks/browser");

  return worker.start();
}

enableMocking().then(() => {
  ReactDOM.createRoot(document.getElementById("root")!).render(<RouterProvider router={router} />);
});
