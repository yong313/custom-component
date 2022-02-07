import React, { useState } from "react";
import "../App.css";
import styled from "styled-components";

const Toggle = (Props) => {
  const [isOn, setisOn] = useState(false);
  const toggleHandler = () => {
    setisOn(!isOn);
  };

  return (
    <div className="basic_box">
      <div className="box_one">
        <h3 className="box_name">Toggle</h3>
      </div>
      {/* 컨텐츠 */}
      <div className="box_two" id="toggle_box">
        <ToggleBox onClick={toggleHandler}>
          <div
            className={`toggle-container ${isOn ? "toggle--checked" : ""}`}
          />
          <div className={`toggle-circle ${isOn ? "toggle--checked" : ""}`} />
        </ToggleBox>
        <Desc>
          <div>{isOn ? "Toggle Switch ON" : "Toggle Switch OFF"}</div>
        </Desc>
      </div>
    </div>
  );
};

const ToggleBox = styled.div`
  position: absolute;
  top: 35%;
  left: 50%;
  transform: translate(-50%, -50%);
  cursor: pointer;

  > .toggle-container {
    width: 50px;
    height: 24px;
    border-radius: 30px;
    background-position: right;
    background: linear-gradient(to left, #ccc 50%, #1da1f2 50%) right;
    background-size: 200%;
    transition: 0.45s;

    &.toggle--checked {
      background-position: left;
      background: linear-gradient(to right, #1da1f2 50%, #ccc 50%) left;
      background-size: 200%;
      transition: 0.45s;
    }
  }

  > .toggle-circle {
    position: absolute;
    top: 2px;
    left: 2px;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: #ffffff;
    transition: 0.35s;

    &.toggle--checked {
      left: 27px;
      transition: 0.35s;
    }
  }
`;

const Desc = styled.div`
  display: flex;
  color: #ccc;
  font-size: 15px;
  font-weight: bold;
  justify-content: center;
  position: absolute;
  top: 45%;
`;

export default Toggle;
