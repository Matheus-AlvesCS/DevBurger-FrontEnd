import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import GlobalStyles from "./styles/globalStyles";
import { Login } from "./containers/Login";
import { ToastContainer } from "react-toastify";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <GlobalStyles />
    <ToastContainer autoClose={2000} theme="dark" pauseOnHover={false} />
    <Login />
  </StrictMode>
);
