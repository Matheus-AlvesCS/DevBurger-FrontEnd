import { useEffect, useState } from "react";
import api from "../../services/api";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { Container, Title } from "./styles";
import { ProductCard } from "../ProductCard";

import formatPrice from "../../utils/formatPrice";

export function OffersCarousel() {
  const [offers, setOffers] = useState([]);

  useEffect(() => {
    async function getProducts() {
      const { data } = await api.get("/products");

      const onlyOffers = data
        .filter((product) => product.offer)
        .map((product) => {
          return { ...product, formattedPrice: formatPrice(product.price) };
        });

      setOffers(onlyOffers);
    }

    getProducts();
  }, []);

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1280 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1280, min: 690 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 690, min: 0 },
      items: 2,
    },
  };

  return (
    <Container>
      <Title>Ofertas do dia</Title>
      <Carousel
        responsive={responsive}
        infinite={true}
        partialVisbile={false}
        itemClass="offers-carousel"
      >
        {offers.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </Carousel>
    </Container>
  );
}
