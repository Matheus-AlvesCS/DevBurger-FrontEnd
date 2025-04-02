import styled from "styled-components";
import { Link } from "react-router";

export const Container = styled.div`
  padding-top: 20px;

  .category-carousel {
    padding: 20px;
  }
`;

export const Title = styled.h2`
  color: #9758a6;
  font-weight: 800;
  font-size: 32px;
  text-align: center;
  text-transform: uppercase;
  padding-bottom: 10px;
  margin-bottom: 20px;
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

export const ItemsContainer = styled.div`
  background-image: url("${(props) => props.$img}");
  background-size: cover;
  background-position: center;
  height: 220px;
  border-radius: 10px;
  position: relative;
`;

export const CategoryButton = styled(Link)`
  text-decoration: none;
  color: #fff;
  font-size: 20px;
  font-weight: 700;
  background-color: #00000080;
  padding: 5px 20px;
  border-radius: 50px;
  position: absolute;
  left: 20px;
  bottom: 25px;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: #9758a6;
  }
`;
