import {
  Container,
  BannerContainer,
  CategoriesMenu,
  ProductsContainer,
} from "./styles";

export function Menu() {
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
      <CategoriesMenu></CategoriesMenu>
      <ProductsContainer></ProductsContainer>
    </Container>
  );
}
