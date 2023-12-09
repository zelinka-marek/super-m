import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <h1 className="text-2xl font-bold text-teal-600">SuperM</h1>
  </StrictMode>,
);
