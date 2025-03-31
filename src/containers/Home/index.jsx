import { BannerContainer, Container } from "./styles";

import { CategoriesCarousel } from "../../components/CategoriesCarousel";
import { OffersCarousel } from "../../components/OffersCarousel";

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
