import React from "react";
import styled from "styled-components";

function PeriodicTable(props) {
  const { data, handleElement, selectedElement } = props;

  return (
    <ElementContainer>
      {data?.map((element, index) => (
        <ElementBox
          item={element}
          key={index}
          handleElement={handleElement}
          selectedElement={selectedElement}
        />
      ))}
    </ElementContainer>
  );
}

const ElementBox = ({ item, handleElement, selectedElement }) => (
  <Element
    onClick={handleElement}
    active={selectedElement.includes(item?.symbol) ? true : false}
  >
    <span>{item?.id}</span>
    <abbr title="Hydrogen">{item?.symbol}</abbr>
  </Element>
);

const ElementContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(18, 0fr);
  gap: 10px;
`;

const Element = styled.button`
  width: 52px;
  height: 52px;
  cursor: pointer;
  background: ${(props) =>
    props.active ? "linear-gradient(to right, #fdc830, #f37335)" : "#091921"};
  box-shadow: rgb(255 255 255 / 7%) -2px -2px 4px, rgb(0 0 0 / 80%) 2px 2px 6px;
  border-radius: 6px;
  outline: none;
  border: none;
  color: #fff;

  span {
    font-size: 8px;
    position: absolute;
    margin: 8px;
  }

  abbr {
    width: 100%;
    height: 100%;
    padding: 6px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &:hover {
    background: linear-gradient(to right, #fdc830, #f37335);
  }

  &:nth-child(2) {
    grid-column-start: 18;
  }

  &:nth-child(5) {
    grid-column-start: 13;
  }

  &:nth-child(13) {
    grid-column-start: 13;
  }

  &:nth-child(74) {
    grid-column-start: 4;
  }

  &:nth-child(104) {
    grid-column-start: 4;
  }

  &:nth-child(57) {
    grid-column-start: 4;
  }

  &:nth-child(89) {
    grid-column-start: 4;
  }
`;

export default PeriodicTable;
