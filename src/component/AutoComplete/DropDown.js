import React from "react";
import styled from "styled-components";

const DropDown = ({ options, handleComboBox, selected }) => {
  return (
    <DropDownContainer>
      {options.map((option, idx) => {
        return (
          <li
            key={idx}
            onClick={() => handleComboBox(option)}
            className={selected === idx ? "selected" : ""}
          >
            {option}
          </li>
        );
      })}
    </DropDownContainer>
  );
};

const DropDownContainer = styled.ul`
  background-color: #fff;
  display: block;
  margin-left: auto;
  margin-right: auto;
  list-style-type: none;
  margin-block-start: 0;
  margin-block-end: 0;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  padding-inline-start: 0px;
  padding-left: 15px;
  border: 1px solid #efefef;
  border-radius: 15px;
  z-index: 3;
  color: #666;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.1);

  > li:hover {
    color: #1da1f2;
  }

  > li {
    padding: 0;
    margin: 12px 0;

    &.selected {
      background-color: #ccc;
    }
  }
`;

export default DropDown;
