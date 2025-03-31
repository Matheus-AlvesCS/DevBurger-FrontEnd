import styled from "styled-components";

export const Container = styled.div`
  background-color: #fff;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  padding: 20px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

  div {
    width: 100%;
    margin-top: 30px;

    p {
      color: #ff8c05;
      font-size: 16px;
      font-weight: 700;
    }

    strong {
      color: #363636;
      font-size: 18px;
    }
  }
`;

export const ImageCard = styled.img`
  height: 100px;
  position: absolute;
  top: -50px;
`;
