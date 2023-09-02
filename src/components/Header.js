import React from "react";
import styled from "styled-components";
import Layout from "./Layout";

const Header = () => {
  return (
    <MainHeader>
      <Layout>
        <Nav>
          <h2 className="font-bold text-2xl">Topological Materials</h2>
        </Nav>
      </Layout>
    </MainHeader>
  );
};

export default Header;

const MainHeader = styled.header`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  background: rgba(227, 228, 233, 0.16);
  width: 100%;
  height: 70px;
  z-index: 10;
`;

const Nav = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`;
