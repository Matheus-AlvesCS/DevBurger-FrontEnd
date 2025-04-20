import styled from "styled-components";

export const Container = styled.div``;

export const ProductImage = styled.img`
  background-color: ${(props) => props.theme.secondWhite};
  border-radius: 10px;
  height: 80px;
  padding: 5px;
`;

export const EditButton = styled.button`
  background-color: ${(props) => props.theme.darkWhite};
  border: none;
  border-radius: 10px;
  height: 32px;
  width: 32px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: ${(props) => props.theme.purple};

    svg {
      fill: ${(props) => props.theme.darkWhite};
    }
  }

  svg {
    font-size: 18px;
  }
`;
