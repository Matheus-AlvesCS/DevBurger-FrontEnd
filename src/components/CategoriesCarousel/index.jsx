import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import api from "../../services/api";

import { Container, ItemsContainer, Title, CategoryButton } from "./styles";

export function CategoriesCarousel() {
  const [categories, setCategories] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    async function getCategories() {
      const { data } = await api.get("/categories");

      setCategories(data);
    }

    getCategories();
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
      <Title>Categorias</Title>
      <Carousel
        responsive={responsive}
        infinite={true}
        partialVisbile={false}
        itemClass="category-carousel"
      >
        {categories.map((category) => (
          <ItemsContainer key={category.id} $img={category.url}>
            <CategoryButton
              onClick={() => {
                navigate({
                  pathname: "/cardapio",
                  search: `?categoria=${category.id}`,
                });
              }}
            >
              {category.name}
            </CategoryButton>
          </ItemsContainer>
        ))}
      </Carousel>
    </Container>
  );
}
