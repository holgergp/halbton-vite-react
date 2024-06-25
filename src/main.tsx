import React from "react";
import "./index.css";
import Guitar from "./guitar/guitar.tsx";
import { createRoot } from "react-dom/client";

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Guitar />
  </React.StrictMode>,
);
