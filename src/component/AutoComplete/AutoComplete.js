import React, { useState, useEffect } from "react";
import "../../App.css";
import styled from "styled-components";
import DropDown from "./DropDown";

const deselectedOptions = [
  "code",
  "coding",
  "codestates",
  "코딩",
  "원티드",
  "프리온보딩",
];

const AutoComplete = (Props) => {
  
  const [hasText, setHasText] = useState(false); 
  const [inputValue, setInputValue] = useState(""); 
  const [options, setOptions] = useState(deselectedOptions); 
  const [selected, setSelected] = useState(-1); 

  useEffect(() => {
    if (inputValue === "") {
      setHasText(false); 
      setOptions([]); 
    }

    if (inputValue !== "") {
      setOptions(
        deselectedOptions.filter((el) => {
          return el.includes(inputValue);
        })
      );
    }
  }, [inputValue]);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
    setHasText(true);
  };

  const handleDropDownClick = (clickedOption) => {
    setInputValue(clickedOption);
  };

  const handleDeleteButtonClick = (event) => {
    setInputValue("");
  };

  const handleKeyUp = (event) => {
    if (hasText) {
      if (event.key === "ArrowDown" && options.length - 1 > selected) {
        setSelected(selected + 1);
      }
      if (event.key === "ArrowUp" && selected >= 0) {
        setSelected(selected - 1);
      }
      if (event.key === "Enter" && selected >= 0) {
        //Enter키로 option 선택
        handleDropDownClick(options[selected]);
        setSelected(-1);
      }
    }
  };

  return (
    <div className="basic_box">
      <div className="box_one">
        <h3 className="box_name">AutoComplete</h3>
      </div>
      {/* 컨텐츠 */}
      <div className="box_two">
        <AutoCompleteBox>
          <InputContainer>
            <input
              type="text"
              value={inputValue}
              defaultValue={inputValue}
              onChange={handleInputChange}
              onKeyUp={handleInputChange}
            ></input>
            <div className="delete-button" onClick={handleDeleteButtonClick}>
              &times;
            </div>
          </InputContainer>
          {hasText && (
            <DropDown
              options={options}
              handleComboBox={handleDropDownClick}
              selected={selected}
            />
          )}
        </AutoCompleteBox>
      </div>
    </div>
  );
};

const AutoCompleteBox = styled.div`
  width: 65%;
`

const InputContainer = styled.div`
  background-color: #ffffff;
  display: flex;
  flex-direction: row;
  padding: 1rem;
  border: 1px solid #efefef;
  border-radius: 15px;
  z-index: 3;

  > input {
    flex: 1 0 0;
    background-color: transparent;
    border: none;
    margin: 0;
    padding: 0;
    outline: none;
    font-size: 16px;
    color: #666;
  }

  > div.delete-button {
    font-size: 20px;
    font-weight: bold;
    cursor: pointer;

    &:hover {
      color: #1da1f2;
      transition: 0.25s;
    }
    &:not(hover) {
      color: #ccc;
      transition: 0.25s;
    }
  }
`;

export default AutoComplete;
