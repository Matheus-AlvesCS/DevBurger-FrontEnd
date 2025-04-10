import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router";
import { Elements } from "@stripe/react-stripe-js";

import { ToastContainer } from "react-toastify";
import GlobalStyles from "./styles/globalStyles";

import routes from "./routes";
import AppProvider from "./hooks";
import stripePromise from "./config/stripeConfig";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AppProvider>
      <GlobalStyles />
      <ToastContainer autoClose={2000} theme="dark" pauseOnHover={false} />
      <Elements stripe={stripePromise}>
        <RouterProvider router={routes} />
      </Elements>
    </AppProvider>
  </StrictMode>
);
