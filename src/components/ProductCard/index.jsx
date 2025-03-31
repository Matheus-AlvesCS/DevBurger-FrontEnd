import PropTypes from "prop-types";

import { Container, ImageCard } from "./styles";
import { CartButton } from "../CartButton";

export function ProductCard({ product }) {
  return (
    <Container>
      <ImageCard src={product.url} alt={product.name} />
      <div>
        <p>{product.name}</p>
        <strong>{product.formattedPrice}</strong>
      </div>
      <CartButton></CartButton>
    </Container>
  );
}

ProductCard.propTypes = {
  product: PropTypes.object,
};
