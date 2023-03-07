import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { GoogleOAuthProvider } from "@react-oauth/google";
ReactDOM.createRoot(document.getElementById("root")).render(
        <GoogleOAuthProvider clientId="154543081467-tib6t09d59q8db0ddmca2f06lgnv58fq.apps.googleusercontent.com">
          <App />
        </GoogleOAuthProvider>
);
