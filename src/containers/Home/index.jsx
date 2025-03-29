import { BannerContainer, Container, Content } from "./styles";

import { CategoriesCarousel } from "../../components/CategoriesCarousel";

export function Home() {
  return (
    <main>
      <BannerContainer>
        <h1>Bem-Vindo(a)!</h1>
      </BannerContainer>
      <Container>
        <Content>
          <CategoriesCarousel />
          <div>Carrosel Produtos</div>
        </Content>
      </Container>
    </main>
  );
}
