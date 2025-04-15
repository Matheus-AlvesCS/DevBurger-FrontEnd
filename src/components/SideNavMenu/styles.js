import { Link } from "react-router";
import styled from "styled-components";

export const Container = styled.div`
  background-color: ${(props) => props.theme.black};
  display: flex;
  flex-direction: column;
  height: 100dvh;
  width: 100%;

  img {
    margin: 40px auto;
    height: 180px;
  }
`;

export const NavContainer = styled.nav`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const NavLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 20px;
  color: ${(props) => props.theme.white};
  background-color: ${(props) => props.$isActive && props.theme.purple};
  border-top: 1px solid #484848;
  border-bottom: 1px solid #484848;
  font-size: 22px;
  text-decoration: none;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: ${(props) => props.theme.purple};
  }
`;

export const Footer = styled.footer`
  margin-top: auto;
  width: 100%;
`;
