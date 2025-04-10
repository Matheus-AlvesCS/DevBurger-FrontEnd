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
    background-color: #9758a6;
    color: #fff;
    border: none;
    border-radius: 5px;
    height: 32px;
    width: 32px;
    transition: all 0.3s ease-in-out;

    &:hover {
      background-color: #6f357c;
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
  color: #9758a6;
`;
