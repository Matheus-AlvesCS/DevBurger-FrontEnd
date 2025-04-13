import styled from "styled-components";

export const Container = styled.div`
  background-color: ${(props) => props.theme.white};
  border-radius: 20px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  * {
    color: ${(props) => props.theme.secondBlack};
  }

  .top-container {
    display: grid;
    justify-content: space-between;
    grid-gap: 10px;
    grid-template-areas:
      "title title"
      "items items-price"
      "delivery delivery-price";
  }

  .title {
    grid-area: title;
    text-align: center;
    font-size: 20px;
    background-color: ${(props) => props.theme.secondBlack};
    color: ${(props) => props.theme.white};
    margin-bottom: 24px;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    padding: 14px;
  }

  .items {
    grid-area: items;
    padding-left: 20px;
  }

  .items-price {
    grid-area: items-price;
    padding-right: 20px;
  }

  .delivery {
    grid-area: delivery;
    padding-left: 20px;
  }

  .delivery-price {
    grid-area: delivery-price;
    padding-right: 20px;
  }

  .bottom-container {
    display: flex;
    justify-content: space-between;
    font-size: 20px;
    font-weight: 700;
    margin-top: 24px;
    padding: 20px;
  }
`;
