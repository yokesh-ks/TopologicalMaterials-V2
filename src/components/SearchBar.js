import React from "react";
import styled from "styled-components";

function SearchBar(props) {
  const { selectedElement, setSelectedElement, handleSearch} = props;
  return (
    <FormContainer>
      <Input
        width="300px"
        value={selectedElement}
        onChange={(e) => setSelectedElement(e.target.value)}
      />
      <SearchIcon onClick={handleSearch}/>
    </FormContainer>
  );
}

const FormContainer = styled.div`
  box-shadow: rgb(255 255 255 / 7%) -2px -2px 4px, rgb(0 0 0 / 80%) 2px 2px 6px;
  background: #091921;
  height: 36px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Input = styled.input.attrs((props) => ({
  type: "text",
  placeholder: "Search",
  size: props.size || "1em",
}))`
  color: #fff;
  outline: none;
  background: transparent;
  border: none;
  font-size: 1em;
  width: ${(props) => props.width || "auto"};
  height: 100%;
  padding: 12px;
`;

const SearchIcon = styled.input.attrs((props) => ({
  type: "submit",
}))`
  background: url(/assets/searchKey.svg);
  background-repeat: no-repeat;
  background-position: 2px 3px;
  width: 18px;
  opacity: 0.3;
  height: 18px;
  padding: 10px;
  border: none;
  padding-left: calc(0.752rem + 0.847vw);
`;

export default SearchBar;
