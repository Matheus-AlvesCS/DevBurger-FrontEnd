import styled from "styled-components";
import { Link } from "react-router";

import { Trash } from "@phosphor-icons/react";

export const ProductImage = styled.img`
  background-color: #f3f3f3;
  margin: 0 auto;
  height: 120px;
`;

export const ButtonsGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  button {
    background-color: ${(props) => props.theme.purple};
    color: ${(props) => props.theme.white};
    border: none;
    border-radius: 5px;
    height: 32px;
    width: 32px;
    transition: all 0.3s ease-in-out;

    &:hover {
      background-color: ${(props) => props.theme.secondDarkPurple};
    }
  }
`;

export const TotalPrice = styled.p`
  font-weight: 700;
  font-size: 18px;
`;

export const TrashIcon = styled(Trash)`
  cursor: pointer;
`;

export const MenuLink = styled(Link)`
  text-decoration: none;
  color: ${(props) => props.theme.purple};
`;
