import { Container, BannerContainer, Title, Content } from "./styles";

import Logo from "../../assets/logo.svg";
import { CartItems, CartResume } from "../../components";

export function Cart() {
  return (
    <Container>
      <BannerContainer>
        <img src={Logo} alt="logo-devburger" />
      </BannerContainer>
      <Title>Checkout - Pedido</Title>
      <Content>
        <CartItems />
        <CartResume />
      </Content>
    </Container>
  );
}
