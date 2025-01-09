import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./main.css";
import Game from "./index.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Game cellSize={128} />
  </StrictMode>
);
