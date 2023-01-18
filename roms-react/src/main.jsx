import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { AuthContextProvider } from "./context/AuthContext";
import { GoogleOAuthProvider } from "@react-oauth/google";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthContextProvider >
      <GoogleOAuthProvider clientId="154543081467-tib6t09d59q8db0ddmca2f06lgnv58fq.apps.googleusercontent.com">
        <App />
      </GoogleOAuthProvider>
    
    </AuthContextProvider>
  </React.StrictMode>
);
