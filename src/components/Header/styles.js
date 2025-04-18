import styled from "styled-components";
import { Link } from "react-router";

export const Container = styled.div`
  background-color: ${(props) => props.theme.mainBlack};
  width: 100%;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 50px;
  max-width: 1280px;
  margin: 0 auto;
`;

export const Navigation = styled.nav`
  display: flex;
  gap: 20px;

  hr {
    border: 1px solid ${(props) => props.theme.darkGray};
  }
`;

export const HeaderLink = styled(Link)`
  text-decoration: none;
  color: ${(props) =>
    props.$isActive
      ? (props) => props.theme.purple
      : (props) => props.theme.white};
  font-size: 14px;
  padding-bottom: 2px;
  border-bottom: ${(props) =>
    props.$isActive ? `1px solid ${props.theme.purple}` : "none"};
  transition: all 0.3s ease-in-out;

  &:hover {
    opacity: 0.8;
  }
`;

export const Options = styled.div`
  display: flex;
  gap: 100px;
`;

export const Profile = styled.div`
  display: flex;
  gap: 5px;

  p {
    font-weight: 300;
    font-size: 14px;
    line-height: 80%;
    color: ${(props) => props.theme.white};

    span {
      color: ${(props) => props.theme.purple};
      font-weight: 500;
      line-height: 80%;
    }
  }
`;

export const Logout = styled(Link)`
  color: #9e1c00;
  line-height: 80%;
  font-size: 14px;
  font-weight: 700;
  text-decoration: none;
  transition: all 0.3s ease-in-out;

  &:hover {
    color: ${(props) => props.theme.red};
  }
`;

export const CartContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
