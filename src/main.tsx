import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "./router/router";
import { App } from "./App";
import "./styles/theme.css";
import "./styles/global.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider>
      <App />
    </RouterProvider>
  </StrictMode>,
);
