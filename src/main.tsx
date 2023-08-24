import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./assets/App.css";
import { ThreeProvider } from "./context/useThreeContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThreeProvider>
      <App />
    </ThreeProvider>
  </React.StrictMode>
);
