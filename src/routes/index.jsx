import { createBrowserRouter } from "react-router";

import {
  Login,
  Register,
  Home,
  Menu,
  Cart,
  Checkout,
  CompletePayment,
} from "../containers";
import { Header, Footer } from "../components";

const routes = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Header />
        <Home />
        <Footer />
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
        <Footer />
      </>
    ),
  },
  {
    path: "/carrinho",
    element: (
      <>
        <Cart />
      </>
    ),
  },
  {
    path: "/checkout",
    element: <Checkout />,
  },
  {
    path: "/complete",
    element: <CompletePayment />,
  },
]);

export default routes;
