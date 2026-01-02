import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";   // ✅ add Google OAuth provider
import App from "./App";
import "./index.css"; // Don't forget your CSS import

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId="223829829288-ki6ao0lp7i1mslq4dhd2h1onts8ofe4n.apps.googleusercontent.com">   {/* ✅ wrap with Google provider */}
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </GoogleOAuthProvider>
  </React.StrictMode>
);
