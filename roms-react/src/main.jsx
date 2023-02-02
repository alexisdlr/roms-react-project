import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GoogleReCaptchaProvider reCaptchaKey="6Lc6bBMkAAAAAJs4uf1VTrni023IjESBvZiSE7JA">
        <GoogleOAuthProvider clientId="154543081467-tib6t09d59q8db0ddmca2f06lgnv58fq.apps.googleusercontent.com">
          <App />
        </GoogleOAuthProvider>
    </GoogleReCaptchaProvider>
  </React.StrictMode>
);
