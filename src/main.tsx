import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import MainPage from "./mainpage";

import "./index.scss";
import "tippy.js/dist/tippy.css";

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("Failed to find the root element.");
}

createRoot(rootElement).render(
  <StrictMode>
    <MainPage />
  </StrictMode>,
);
