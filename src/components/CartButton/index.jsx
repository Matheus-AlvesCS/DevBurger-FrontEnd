import { Container } from "./styles";

import Cart from "../../assets/cart.svg";

export function CartButton({ ...props }) {
  return (
    <Container {...props}>
      <img src={Cart} />
    </Container>
  );
}
