import React from "react";
import styled from "styled-components";
import { Card } from "./ui/card";

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
  <Element onClick={handleElement}>
    <Card
      className={`w-10 h-10 cursor-pointer relative ${
        selectedElement.includes(item?.symbol)
          ? "bg-primary text-primary-foreground"
          : "bg-default text-default-foreground hover:bg-secondary hover:text-secondary-foreground"
      } `}
    >
      <span className="absolute top-[4px] right-[4px]">{item?.id}</span>
      <abbr
        title="Hydrogen"
        className="w-full h-full flex items-center justify-center no-underline"
        style={{ fontSize: 16 }}
      >
        {item?.symbol}
      </abbr>
    </Card>
  </Element>
);

const ElementContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(18, 0fr);
  gap: 10px;
`;

const Element = styled.button`
  span {
    font-size: 6px;
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
