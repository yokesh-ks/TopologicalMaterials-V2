import React from "react";
import styled from "styled-components";

const Layout = ({ children }) => {
  return <Container>{children}</Container>;
};

export default Layout;

const Container = styled.div`
  max-width: 100%;
  height: 100%;
  margin: 0 auto;
  @media (min-width: 330px) {
    max-width: 300px;
  }
  @media (min-width: 375px) {
    max-width: 327px;
  }
  @media (min-width: 576px) {
    max-width: 440px;
  }
  @media (min-width: 768px) {
    max-width: 720px;
  }
  @media (min-width: 992px) {
    max-width: 952px;
  }
  @media (min-width: 1200px) .container {
    max-width: 1080px;
  }
  @media (min-width: 1400px) {
    max-width: 1200px;
  }
`;
