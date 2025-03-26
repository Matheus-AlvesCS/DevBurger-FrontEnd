import styled from "styled-components";

export const Container = styled.button`
  width: 100%;
  border: none;
  border-radius: 5px;
  padding: 10px;
  background-color: #9758a6;
  color: #fff;
  font-family: "Road Rage", sans-serif;
  font-size: 30px;
  font-weight: 400;
  text-transform: uppercase;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: #6f357c;
    background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='5' ry='5' stroke='white' stroke-width='3' stroke-dasharray='6%2c 14' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e");
    border-radius: 5px;
  }
`;
