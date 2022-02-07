import { useEffect, useState, useRef } from "react";
import styled from "styled-components";

const MyInput = ({ value, handleValueChange }) => {
  const inputEl = useRef(null);
  const [isEditMode, setEditMode] = useState(false); //edit모드 상태
  const [newValue, setNewValue] = useState(value); //출력값 상태

  useEffect(() => {
    if (isEditMode) {
      //edit모드가 활성화 되면 input창에 포커스를 줘서 수정이 가능하도록 함
      inputEl.current.focus();
    }
  }, [isEditMode]);

  useEffect(() => {
    setNewValue(value);
  }, [value]);

  const handleClick = () => {
    //span태그를 클릭하면 edit모드가 활성화 되고 위의 useEffect에 의해 input창에 포커싱
    setEditMode(true);
  };

  const handleBlur = () => {
    //input창이 아닌 다른 곳을 클릭하면 edit모드를 비활성화로 만든다.
    setEditMode(false);
    handleValueChange(newValue); //그리고 input창에 입력되어있는 값으로 newValue를 변경
  };

  const handleInputChange = (e) => {
    setNewValue(e.target.value); //input에 입력한 값을 newValue에 담아둠
    //여기서 입력을 해준다고 바로바로 밑의 출력값이 변화 x
    //왜냐하면 handleBlur에 의해서 handleValueChange 함수가 실행되어야 값이 바뀌기 때문
  };

  return (
    <InputBox>
      {isEditMode ? (
        <InputEdit
          type="text"
          value={newValue}
          ref={inputEl}
          onBlur={handleBlur}
          onChange={handleInputChange}
        />
      ) : (
        <span onClick={handleClick}>{newValue}</span>
      )}
    </InputBox>
  );
};

const InputBox = styled.div`
  width: 150px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #efefef;
  border-radius: 10px;
  margin-left: 1rem;
  color: #666;
`;

const InputEdit = styled.input`
  width: 150px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  display: inline-block;
  border: 1px solid #1da1f2;
  border-radius: 10px;
  color: #666;

  &:focus {
    outline: none;
  }
`;

export default MyInput;
