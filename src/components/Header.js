import React from "react";
import styled from "styled-components";
import Layout from "./Layout";
import SearchBar from "./SearchBar";

const Header = (props) => {
  const { selectedElement, setSelectedElement, handleSearch } = props;
  return (
    <MainHeader>
      <Layout>
        <Nav>
          <Title>Topological Materials</Title>
          <SearchBar
            selectedElement={selectedElement}
            setSelectedElement={setSelectedElement}
            handleSearch={handleSearch}
          />
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
  box-shadow: rgb(255 255 255 / 7%) -2px -2px 4px, rgb(0 0 0 / 80%) 2px 2px 6px;
  background: #091921;
  width: 100%;
  height: 70px;
  z-index: 100;
`;

const Nav = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Title = styled.h2`
  font-size: 20px;
  font-weight: 300;
  color: #fa4eab;
`;
