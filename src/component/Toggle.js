import React, { useState } from "react";
import "../App.css";
import styled from "styled-components";

const Toggle = (Props) => {
  // 토글 상태 관리
  const [isToggleOn, setIsToggleOn] = useState(false);
  const toggleHandler = () => {
    setIsToggleOn(!isToggleOn);
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
            className={`toggle_bg ${isToggleOn ? "toggle_check" : ""}`}
          />
          <div className={`toggle_ball ${isToggleOn ? "toggle_check" : ""}`} />
        </ToggleBox>
        <ToggleState>
          <div>{isToggleOn ? "Toggle Switch ON" : "Toggle Switch OFF"}</div>
        </ToggleState>
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

  > .toggle_bg {
    width: 50px;
    height: 24px;
    border-radius: 30px;
    background-position: right;
    background: linear-gradient(to left, #ccc 50%, #1da1f2 50%) right;
    background-size: 200%;
    transition: 0.45s;

    &.toggle_check {
      background-position: left;
      background: linear-gradient(to right, #1da1f2 50%, #ccc 50%) left;
      background-size: 200%;
      transition: 0.45s;
    }
  }

  > .toggle_ball {
    position: absolute;
    top: 2px;
    left: 2px;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: #ffffff;
    transition: 0.35s;

    &.toggle_check {
      left: 27px;
      transition: 0.35s;
    }
  }
`;

const ToggleState = styled.div`
  display: flex;
  color: #ccc;
  font-size: 15px;
  font-weight: bold;
  justify-content: center;
  position: absolute;
  top: 45%;
`;

export default Toggle;
