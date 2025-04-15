import { navLinks } from "./navLinks";
import { useLocation } from "react-router";

import { Container, Footer, NavContainer, NavLink } from "./styles";

import { useUser } from "../../hooks/UserContext";

import Logo from "../../assets/logo.svg";
import { SignOut } from "@phosphor-icons/react";

export function SideNavMenu() {
  const { logout } = useUser();

  const { pathname } = useLocation();

  return (
    <Container>
      <img src={Logo} alt="logo-devburger" />
      <NavContainer>
        {navLinks.map((link) => (
          <NavLink
            key={link.id}
            to={link.path}
            $isActive={link.path === pathname}
          >
            {link.icon}
            <p>{link.label}</p>
          </NavLink>
        ))}
      </NavContainer>
      <Footer>
        <NavLink to="/login" onClick={logout}>
          <SignOut />
          <p>Sair</p>
        </NavLink>
      </Footer>
    </Container>
  );
}
