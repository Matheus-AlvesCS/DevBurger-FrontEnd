import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router";

import { ToastContainer } from "react-toastify";
import GlobalStyles from "./styles/globalStyles";

import routes from "./routes";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <GlobalStyles />
    <ToastContainer autoClose={2000} theme="dark" pauseOnHover={false} />
    <RouterProvider router={routes} />
  </StrictMode>
);
