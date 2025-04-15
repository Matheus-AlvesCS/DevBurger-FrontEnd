import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: minmax(220px, 280px) 1fr;

  main {
    display: flex;
    flex-direction: column;
    height: 100dvh;
    width: 100%;
    background-color: ${(props) => props.theme.secondWhite};
    overflow-y: auto;

    section {
      margin: 0 auto;
      max-width: 1200px;
      width: 100%;
      padding: 40px 20px;
    }
  }
`;
