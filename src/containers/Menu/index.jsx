import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router";

import api from "../../services/api";
import formatPrice from "../../utils/formatPrice";

import {
  Container,
  BannerContainer,
  CategoriesMenu,
  ProductsContainer,
  CategoryButton,
} from "./styles";

import { ProductCard } from "../../components/ProductCard";

export function Menu() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  const navigate = useNavigate();

  const { search } = useLocation();
  const queryParams = new URLSearchParams(search);

  const [activeCategory, setActiveCategory] = useState(() => {
    const categoryId = +queryParams.get("categoria");

    if (!categoryId) {
      return 0;
    }

    return categoryId;
  });

  useEffect(() => {
    async function getCategories() {
      const { data } = await api.get("/categories");

      const newCategories = [{ id: 0, name: "Todas" }, ...data];

      setCategories(newCategories);
    }

    async function getProducts() {
      const { data } = await api.get("/products");

      const newProducts = data.map((product) => {
        return { ...product, formattedPrice: formatPrice(product.price) };
      });

      setProducts(newProducts);
    }

    getCategories();
    getProducts();
  }, []);

  useEffect(() => {
    if (activeCategory === 0) {
      setFilteredProducts(products);
    } else {
      const newFilteredProducts = products.filter(
        (product) => product.category_id === activeCategory
      );

      setFilteredProducts(newFilteredProducts);
    }
  }, [products, activeCategory]);

  return (
    <Container>
      <BannerContainer>
        <div>
          <h1>
            O melhor <br /> hambúrguer <br /> está aqui!
          </h1>
          <p>Esse cardápio está irresistível!</p>
        </div>
      </BannerContainer>
      <CategoriesMenu>
        {categories.map((category) => (
          <CategoryButton
            key={category.id}
            $isActive={category.id === activeCategory}
            onClick={() => {
              navigate(
                {
                  pathname: "/cardapio",
                  search: `?categoria=${category.id}`,
                },
                {
                  replace: true,
                }
              );
              setActiveCategory(category.id);
            }}
          >
            {category.name}
          </CategoryButton>
        ))}
      </CategoriesMenu>
      <ProductsContainer>
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </ProductsContainer>
    </Container>
  );
}
