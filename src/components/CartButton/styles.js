import styled from "styled-components";

export const Container = styled.button`
  background-color: ${(props) => props.theme.purple};
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 10px;
  padding: 10px 0;
  width: 100%;

  &:hover {
    background-color: ${(props) => props.theme.secondDarkPurple};
  }
`;
