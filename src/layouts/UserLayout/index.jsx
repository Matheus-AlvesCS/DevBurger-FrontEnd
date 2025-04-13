import { Outlet } from "react-router";
import { Footer, Header } from "../../components";

export function UserLayout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
