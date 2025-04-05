import PropTypes from "prop-types";

import { useCart } from "../../hooks/CartContext";

import { Container, ImageCard } from "./styles";
import { CartButton } from "../CartButton";

export function ProductCard({ product }) {
  const { putProductInCart } = useCart();

  return (
    <Container>
      <ImageCard src={product.url} alt={product.name} />
      <div>
        <p>{product.name}</p>
        <strong>{product.formattedPrice}</strong>
      </div>
      <CartButton onClick={() => putProductInCart(product)} />
    </Container>
  );
}

ProductCard.propTypes = {
  product: PropTypes.object,
};
