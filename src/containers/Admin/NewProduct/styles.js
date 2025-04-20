import styled from "styled-components";

import ReactSelect from "react-select";
import { Button } from "../../../components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100dvh;
`;

export const Form = styled.form`
  background-color: ${(props) => props.theme.black};
  max-width: 430px;
  width: 100%;
  padding: 40px;
  box-shadow: 0px 0px 11px 0px #00000080;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;

  p {
    color: ${(props) => props.theme.darkRed};
    font-size: 14px;
  }
`;

export const Label = styled.label`
  color: ${(props) => props.theme.white};
  font-size: 18px;
`;

export const Input = styled.input`
  padding: 14px;
  border: none;
  border-radius: 5px;
  font-size: 14px;
  font-weight: 600;
  color: rgba(0, 0, 0, 0.6);
`;

export const UploadLabel = styled.label`
  cursor: pointer;
  border: 1px dashed ${(props) => props.theme.white};
  border-radius: 5px;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  color: ${(props) => props.theme.white};
  margin: 10px 0;

  > svg {
    width: 20px;
    height: 20px;
  }

  > input {
    display: none;
  }
`;

export const Select = styled(ReactSelect)``;

export const SubmitButton = styled(Button)`
  margin-top: 30px;
`;

export const CheckboxContainer = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 10px;

  input {
    cursor: pointer;
  }
`;
