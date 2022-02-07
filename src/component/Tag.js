import React, { useState } from "react";
import "../App.css";
import styled from "styled-components";

const Tag = (Props) => {
  const initialTags = ["CodeStates", "yong313"];

  const [tags, setTags] = useState(initialTags);

  const removeTags = (indexToRemove) => {
    // 삭제기능 구현
    // map함수의 index를 전달받아 클릭된 인덱스 정보를 활용해서 삭제를 시킴
    setTags(
      tags.filter((tag) => {
        return tag !== tags[indexToRemove];
      })
    );
  };

  const addTags = (event) => {
    //tag추가 기능 구현
    let value = event.target.value.trim();
    // 이미 입력되어 있는 태그인지 검사하여 이미 있는 태그라면 추가하지 말기
    // 아무것도 입력하지 않은 채 Enter 키 입력시 메소드 실행하지 말기
    if (event.key === "Enter" && !tags.includes(value) && value) {
      setTags([...tags, value]);
      // 태그가 추가되면 input 창 비우기
      event.target.value = "";
    } else if (event.key === "Enter" && !value) {
      event.target.value = "";
    }
  };

  return (
    <div className="basic_box">
      <div className="box_one">
        <h3 className="box_name">Tag</h3>
      </div>
      {/* 컨텐츠 */}
      <div className="box_two">
        <TagsInput>
          <ul id="tags">
            {tags.map((tag, index) => (
              <li key={index} className="tag">
                <span className="tag_title">{tag}</span>
                <span
                  className="tag_closeicon"
                  onClick={() => removeTags(index)}
                >
                  &times;
                </span>
              </li>
            ))}
          </ul>
          <input
            className="tag_input"
            type="text"
            onKeyUp={(event) => {
              addTags(event);
            }}
            placeholder="Press enter to add tags"
          />
        </TagsInput>
      </div>
    </div>
  );
};

const TagsInput = styled.div`
  margin: 0 auto;
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  min-height: 48px;
  width: 480px;
  padding: 0 8px;
  border: 1px solid #efefef;
  border-radius: 15px;

  > ul {
    display: flex;
    flex-wrap: wrap;
    padding: 0;
    margin: 8px 0 0 0;

    > .tag {
      width: auto;
      height: 32px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #fff;
      font-weight: bold;
      padding: 0 8px;
      font-size: 14px;
      list-style: none;
      border-radius: 8px;
      margin: 0 8px 8px 0;
      background-color: #1da1f2;

      > .tag_closeicon {
        display: block;
        width: 16px;
        height: 16px;
        text-align: center;
        line-height: 14px;
        font-size: 13px;
        margin-left: 8px;
        color: #1da1f2;
        border-radius: 50%;
        background-color: #fff;
        cursor: pointer;
      }
    }
  }

  > .tag_input {
    flex: 1;
    border: none;
    height: 46px;
    font-size: 14px;
    padding: 4px 0 0 0;
    :focus {
      outline: transparent;
    }
    ::placeholder {
      color: #ccc;
    }
  }

  &:focus-within {
    border: 1px solid #1da1f2;
  }
`;

export default Tag;
