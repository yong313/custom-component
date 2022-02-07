import React, { useState } from "react";
import "../App.css";
import styled from "styled-components";

const Tab = (Props) => {
  const menuArr = [
    { name: "Tab1", content: "Tab menu ONE" },
    { name: "Tab2", content: "Tab menu TWO" },
    { name: "Tab3", content: "Tab menu THREE" },
  ];

  const [currentTab, setCurrentTab] = useState(0);

  const selectMenuHandler = (index) => {
    setCurrentTab(index);
  };

  return (
    <div className="basic_box">
      <div className="box_one">
        <h3 className="box_name">Tab</h3>
      </div>
      {/* 컨텐츠 */}
      <div className="box_two">
        <TabBox>
          <TabMenu>
            {menuArr.map((el, index) => {
              return (
                <li
                  key={index}
                  className={`${
                    index === currentTab ? "submenu focused" : "submenu"
                  }`}
                  onClick={() => selectMenuHandler(index)}
                >
                  {el.name}
                </li>
              );
            })}
          </TabMenu>
          <Desc>
            <p>{menuArr[currentTab].content}</p>
          </Desc>
        </TabBox>
      </div>
    </div>
  );
};

const TabBox = styled.div`
  width: 100%;
  height: auto;
  padding: 0 50px;
`;

const TabMenu = styled.ul`
  background-color: #efefef;
  color: #ccc;
  display: flex;
  flex-direction: row;
  justify-items: center;
  align-items: center;
  list-style: none;
  height: 35px;
  border-radius: 15px;
  overflow: hidden;
  padding: 0;
  margin-bottom: 50px;

  .submenu {
    display: flex;
    justify-content: center;
    flex-grow: 1;
    cursor: pointer;
  }

  .focused {
    background-color: #1da1f2;
    color: white;
    font-weight: bold;
    height: 100%;
    display: flex;
    align-items: center;
    border-radius: 15px;
    transition: 0.25s;
  }
`;

const Desc = styled.div`
  text-align: center;
  color: #ccc;
  font-weight: bold;
`;

export default Tab;
