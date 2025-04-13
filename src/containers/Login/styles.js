import styled from "styled-components";

import Background1 from "../../assets/background1.svg";
import Background2 from "../../assets/background2.svg";

import { Button } from "../../components/Button";

export const Container = styled.main`
  height: 100dvh;
  width: 100dvw;
  display: flex;
`;

export const LeftContainer = styled.div`
  background-image: url("${Background1}");
  background-position: center;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  max-width: 50%;

  img {
    max-width: 70%;
  }
`;

export const RightContainer = styled.div`
  background-image: url("${Background2}");
  background-color: #1e1e1e;
  background-position: center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  max-width: 50%;
`;

export const Title = styled.h2`
  color: ${(props) => props.theme.white};
  font-size: 40px;
  font-weight: 400;
  text-align: center;
  font-family: ${(props) => props.theme.roadRageFont};

  span {
    color: ${(props) => props.theme.purple};
    font-family: ${(props) => props.theme.roadRageFont};
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: 35px 0 20px 0;
  padding: 20px;
  max-width: 400px;
  width: 100%;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;

  label {
    color: ${(props) => props.theme.white};
    font-size: 18px;
    font-weight: 600;
    margin-left: 5px;
  }

  input {
    padding: 14px;
    border: none;
    border-radius: 5px;
    font-size: 16px;
    font-weight: 600;
    color: rgba(0, 0, 0, 0.6);
  }

  p {
    color: ${(props) => props.theme.darkRed};
    font-size: 12px;
    margin-left: 5px;
    height: 10px;
  }
`;

export const Warn = styled.p`
  color: ${(props) => props.theme.white};
  font-size: 18px;
  font-weight: 700;

  a {
    text-decoration: underline;
    color: ${(props) => props.theme.white};

    &:hover {
      opacity: 0.8;
    }
  }
`;

export const FormButton = styled(Button)`
  margin-top: 50px;
`;
