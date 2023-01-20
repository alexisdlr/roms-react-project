import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { AuthContextProvider } from "./context/AuthContext";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthContextProvider>
      <GoogleReCaptchaProvider
      reCaptchaKey="6LfXCA8kAAAAAOmiDrthaBjmJbirO50XPmPBGdLQ"
      >
        <GoogleOAuthProvider clientId="154543081467-tib6t09d59q8db0ddmca2f06lgnv58fq.apps.googleusercontent.com">
          <App />
        </GoogleOAuthProvider>
      </GoogleReCaptchaProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
