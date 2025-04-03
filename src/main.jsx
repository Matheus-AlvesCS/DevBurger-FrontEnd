import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router";

import { ToastContainer } from "react-toastify";
import GlobalStyles from "./styles/globalStyles";

import routes from "./routes";
import AppProvider from "./hooks";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AppProvider>
      <GlobalStyles />
      <ToastContainer autoClose={2000} theme="dark" pauseOnHover={false} />
      <RouterProvider router={routes} />
    </AppProvider>
  </StrictMode>
);
