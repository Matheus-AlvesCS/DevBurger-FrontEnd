import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.darkPurple};
  padding: 10px;

  p {
    color: ${(props) => props.theme.white};
    font-size: 14px;
    font-weight: 400;
  }
`;
