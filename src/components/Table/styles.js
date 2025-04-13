import styled from "styled-components";

export const Root = styled.table`
  width: 100%;
  background-color: ${(props) => props.theme.white};
  border-radius: 20px;
  border-collapse: collapse;
`;

export const Header = styled.thead`
  background-color: ${(props) => props.theme.secondBlack};
`;

export const Body = styled.tbody``;

export const Tr = styled.tr``;

export const Th = styled.th`
  padding: 16px;
  color: ${(props) => props.theme.white};
  border-bottom: 1px solid ${(props) => props.theme.lightGray};
  text-align: left;

  &:first-child {
    border-top-left-radius: 20px;
  }

  &:last-child {
    border-top-right-radius: 20px;
  }
`;

export const Td = styled.td`
  padding: 16px;
  color: ${(props) => props.theme.secondBlack};
  font-weight: 500;
  line-height: 115%;
  text-align: center;
`;
