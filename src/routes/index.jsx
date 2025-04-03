import { createBrowserRouter } from "react-router";

import { Login } from "../containers/Login";
import { Register } from "../containers/Register";
import { Home } from "../containers/Home";
import { Menu } from "../containers/Menu";
import { Header } from "../components/Header";

const routes = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Header />
        <Home />
      </>
    ),
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/cadastro",
    element: <Register />,
  },
  {
    path: "/cardapio",
    element: (
      <>
        <Header />
        <Menu />
      </>
    ),
  },
]);

export default routes;
