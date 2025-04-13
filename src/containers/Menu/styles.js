import styled from "styled-components";
import { Link } from "react-router";

import Banner from "../../assets/banner-menu.svg";
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
  background-image: url("${Banner}");
  background-color: rgba(0, 0, 0, 0.8);
  background-size: cover;
  background-position: center;
  height: 480px;
  color: ${(props) => props.theme.white};
  display: flex;
  align-items: center;
  position: relative;

  div {
    position: absolute;
    right: 20%;

    h1 {
      font-family: ${(props) => props.theme.roadRageFont};
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

export const TopContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  margin-top: 30px;
`;

export const BackButton = styled(Link)`
  position: absolute;
  left: 5%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.purple};
  border: 2px solid ${(props) => props.theme.white};
  border-radius: 10px;
  padding: 5px;

  &:hover {
    background-color: ${(props) => props.theme.secondDarkPurple};
  }
`;

export const CategoriesMenu = styled.div`
  display: flex;
  justify-content: center;
  gap: 50px;
`;

export const CategoryButton = styled(Link)`
  text-decoration: none;
  background-color: ${(props) =>
    props.$isActive
      ? (props) => props.theme.purple
      : (props) => props.theme.white};
  color: ${(props) =>
    props.$isActive
      ? (props) => props.theme.white
      : (props) => props.theme.purple};
  font-size: 20px;
  font-weight: 500;
  border: 2px solid ${(props) => props.theme.purple};
  border-radius: 10px;
  padding: 5px;
  transition: all 0.3s ease-in-out;
`;

export const ProductsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding: 40px;
  gap: 80px;
  max-width: 1280px;
  margin: 50px auto 0;
`;
