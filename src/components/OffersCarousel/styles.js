import styled from "styled-components";

export const Container = styled.div`
  padding: 20px 0 40px;
  margin-top: 20px;
  overflow-x: hidden;

  .offers-carousel {
    padding: 20px;
    margin-top: 70px;
  }

  .react-multi-carousel-list {
    overflow: visible;
  }
`;

export const Title = styled.h2`
  color: #61a120;
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
    background-color: #61a120;
  }
`;
