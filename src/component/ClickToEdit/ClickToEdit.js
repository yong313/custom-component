import React, { useState } from "react";
import "../../App.css";
import styled from "styled-components";
import MyInput from "./MyInput";

const ClickToEdit = (Props) => {
  const cache = {
    name: "전용태",
    age: 33,
  };
  const [name, setName] = useState(cache.name);
  const [age, setAge] = useState(cache.age);

  return (
    <div className="basic_box">
      <div className="box_one">
        <h3 className="box_name">ClickToEdit</h3>
      </div>
      {/* 컨텐츠 */}
      <div className="box_two">
        <InputViewBox>
          <InputView>
            <label>이름</label>
            <MyInput
              value={name}
              handleValueChange={(newValue) => setName(newValue)}
            />
          </InputView>
          <InputView>
            <label>나이</label>
            <MyInput
              value={age}
              handleValueChange={(newValue) => setAge(newValue)}
            />
          </InputView>
          <InputView>
            <div className="view">
              <p>
                이름 : <span className="name_age">{name}</span> &nbsp; | &nbsp; 나이 : <span className="name_age">{age}</span>
              </p>
            </div>
          </InputView>
        </InputViewBox>
      </div>
    </div>
  );
};

const InputViewBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: auto;
  position: absolute;
`;

const InputView = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
  margin: 10px 0;

  label {
    color: #ccc;
  }

  div.view {
    color: #ccc;

    .name_age {
      font-weight: bold;
      color: #666;
    }
  }
`;

export default ClickToEdit;
