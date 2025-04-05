import styled from "styled-components";

import TopBackground from "../../assets/top-background.svg";
import Background from "../../assets/background2.svg";

export const Container = styled.main`
  min-height: 100dvh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("${Background}");
`;

export const BannerContainer = styled.div`
  background-image: url("${TopBackground}");
  background-position: center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 180px;

  img {
    height: 160px;
  }
`;

export const Title = styled.h1`
  color: #61a120;
  font-size: 32px;
  font-weight: 800;
  padding-bottom: 10px;
  margin-top: 30px;
  text-align: center;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    height: 4px;
    width: 56px;
    background-color: #9758a6;
  }
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 20%;
  gap: 40px;
  max-width: 1280px;
  width: 100%;
  padding: 40px;
  margin: 0 auto;
`;
