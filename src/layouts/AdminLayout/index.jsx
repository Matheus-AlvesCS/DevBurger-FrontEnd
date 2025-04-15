import { Outlet, Navigate } from "react-router";

import { Container } from "./styles";

import { SideNavMenu } from "../../components";

export function AdminLayout() {
  const isAdmin = JSON.parse(localStorage.getItem("devburger:userData")).admin;

  return isAdmin ? (
    <Container>
      <SideNavMenu />
      <main>
        <section>
          <Outlet />
        </section>
      </main>
    </Container>
  ) : (
    <Navigate to="/login" />
  );
}
