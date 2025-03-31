import styled from "styled-components";

import Banner from "../../assets/banner-home.svg";
import Background from "../../assets/background2.svg";

export const BannerContainer = styled.div`
  background-image: url("${Banner}");
  background-position: center;
  background-size: cover;
  height: 480px;
  position: relative;

  h1 {
    color: #fff;
    font-family: "Road Rage", sans-serif;
    font-weight: 400;
    font-size: 80px;
    position: absolute;
    top: 10%;
    right: 10%;
  }
`;

export const Container = styled.section`
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("${Background}");
`;
