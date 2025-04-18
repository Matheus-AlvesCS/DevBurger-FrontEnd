import styled from "styled-components";
import Select from "react-select";

export const ProductImg = styled.img`
  height: 100px;
  background-color: ${(props) => props.theme.secondWhite};
  border-radius: 10px;
  padding: 5px;
`;

export const StatusSelect = styled(Select)`
  max-width: 240px;
  width: 100%;
`;

export const Filter = styled.div`
  display: flex;
  justify-content: center;
  margin: 28px 0;
  gap: 50px;
`;

export const FilterOption = styled.button`
  background-color: ${(props) =>
    props.$isActive ? props.theme.purple : props.theme.white};
  border: 2px solid ${(props) => props.theme.purple};
  border-radius: 10px;
  padding: 8px 16px;
  color: ${(props) =>
    props.$isActive ? props.theme.white : props.theme.purple};
  font-size: 16px;
  font-weight: 500;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: ${(props) => props.theme.purple};
    color: ${(props) => props.theme.white};
  }
`;
