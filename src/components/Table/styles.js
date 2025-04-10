import styled from "styled-components";

export const Root = styled.table`
  width: 100%;
  background-color: #fff;
  border-radius: 20px;
  border-collapse: collapse;
`;

export const Header = styled.thead`
  background-color: #484848;
`;

export const Body = styled.tbody``;

export const Tr = styled.tr``;

export const Th = styled.th`
  padding: 16px;
  color: #fff;
  border-bottom: 1px solid #cdcdcd;
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
  color: #484848;
  font-weight: 500;
  line-height: 115%;
  text-align: center;
`;
