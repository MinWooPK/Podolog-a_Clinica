import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import "./i18n";
import { AuthProvider } from "@context/AuthProvider";
import { ModalProvider } from "@context/ModalContext";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AuthProvider>
      <ModalProvider>
        <App />
      </ModalProvider>
    </AuthProvider>
  </React.StrictMode>,
);
