import { useLocation } from "react-router";

import { useUser } from "../../hooks/UserContext";

import {
  CartContainer,
  Container,
  HeaderLink,
  Logout,
  Navigation,
  Options,
  Profile,
  Content,
} from "./styles";

import { UserCircle, ShoppingCart } from "@phosphor-icons/react";

export function Header() {
  const { userInfo, logout } = useUser();

  const { pathname } = useLocation();

  return (
    <Container>
      <Content>
        <Navigation>
          <HeaderLink to={"/"} $isActive={pathname === "/"}>
            Home
          </HeaderLink>
          <hr />
          <HeaderLink to={"/cardapio"} $isActive={pathname === "/cardapio"}>
            Cardápio
          </HeaderLink>
        </Navigation>
        <Options>
          <Profile>
            <UserCircle color="#fff" size={28} />
            <div>
              <p>
                Olá, <span>{userInfo.name}</span>
              </p>
              <Logout to={"/login"} onClick={() => logout()}>
                Sair
              </Logout>
            </div>
          </Profile>
          <CartContainer>
            <ShoppingCart color="#fff" size={24} />
            <HeaderLink to="/carrinho">Carrinho</HeaderLink>
          </CartContainer>
        </Options>
      </Content>
    </Container>
  );
}
