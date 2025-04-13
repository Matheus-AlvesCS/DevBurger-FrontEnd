import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import { Elements } from "@stripe/react-stripe-js";

import { ThemeProvider } from "styled-components";
import { ToastContainer } from "react-toastify";
import GlobalStyles from "./styles/globalStyles";

import { standardTheme } from "./styles/themes/standard";
import AppProvider from "./hooks";
import stripePromise from "./config/stripeConfig";
import Router from "./routes";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider theme={standardTheme}>
      <AppProvider>
        <GlobalStyles />
        <ToastContainer autoClose={2000} theme="dark" pauseOnHover={false} />
        <Elements stripe={stripePromise}>
          <BrowserRouter>
            <Router />
          </BrowserRouter>
        </Elements>
      </AppProvider>
    </ThemeProvider>
  </StrictMode>
);
