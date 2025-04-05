import { BannerContainer, Container } from "./styles";

import { CategoriesCarousel, OffersCarousel } from "../../components";

export function Home() {
  return (
    <main>
      <BannerContainer>
        <h1>Bem-Vindo(a)!</h1>
      </BannerContainer>
      <Container>
        <div>
          <CategoriesCarousel />
          <OffersCarousel />
        </div>
      </Container>
    </main>
  );
}
