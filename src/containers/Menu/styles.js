import styled from "styled-components";

import Banner from "../../assets/banner-menu.svg";

export const Container = styled.main`
  min-height: 100dvh;
  background-color: #f0f0f0;
`;

export const BannerContainer = styled.div`
  background-image: url("${Banner}");
  background-color: rgba(0, 0, 0, 0.8);
  background-size: cover;
  background-position: center;
  height: 480px;
  color: #fff;
  display: flex;
  align-items: center;
  position: relative;

  div {
    position: absolute;
    right: 20%;

    h1 {
      font-family: "Road Rage", sans-serif;
      font-size: 90px;
      line-height: 69%;
      text-align: center;
      text-transform: uppercase;
      font-weight: 400;
    }

    p {
      text-align: center;
    }
  }
`;

export const CategoriesMenu = styled.div``;

export const ProductsContainer = styled.div``;
