import React, { useState, useEffect, useCallback } from "react";
import "../App.css";
import styled from "styled-components";

const Modal = (Props) => {
  // 모달 열기 & 닫기
  const [isOpen, setIsOpen] = useState(false);
  const ModalHandler = (event) => {
    if (isOpen) {
      // 배경 스크롤 방지 해제
      document.body.style.overflow = "unset";
      setIsOpen(!isOpen);
    } else {
      // 배경 스크롤 방지
      document.body.style.overflow = "hidden";
      setIsOpen(!isOpen);
    }
  };

  // esc로 닫기
  const keyPress = useCallback(
    (e) => {
      if (e.key === "Escape" && setIsOpen) {
        setIsOpen(!isOpen);
        document.body.style.overflow = "unset";
      }
    },
    [isOpen, setIsOpen]
  );

  useEffect(() => {
    document.addEventListener("keydown", keyPress);
    return () => document.removeEventListener("keydown", keyPress);
  }, [keyPress]);

  return (
    <div className="basic_box">
      <div className="box_one">
        <h3 className="box_name">Modal</h3>
      </div>
      <div className="box_two">
        {/* 컨텐츠 */}
        <ModalBox>
          <ModalButton onClick={ModalHandler}>
            {isOpen ? "Hello 🎉" : "Open Modal"}
          </ModalButton>

          {isOpen ? (
            <ModalBackGround onClick={ModalHandler}>
              <ModalContents
                onClick={(event) => {
                  event.stopPropagation();
                }}
              >
                <div className="close-btn" onClick={ModalHandler}>
                  &times;
                </div>
                <div>Hi there 👋</div>
              </ModalContents>
            </ModalBackGround>
          ) : null}
        </ModalBox>
      </div>
    </div>
  );
};

const ModalBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  position: relative;
`;

const ModalBackGround = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1;
  animation: fadeInBg 0.25s ease-out;

  @keyframes fadeInBg {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const ModalButton = styled.button`
  width: 150px;
  height: 50px;
  font-size: 15px;
  font-weight: bold;
  color: #fff;
  border: none;
  border-radius: 15px;
  cursor: pointer;

  &:focus {
    outline: none;
  }

  &:hover {
    background-color: #1b92ce;
    transition: 0.25s;
  }

  &:not(hover) {
    background-color: #1da1f2;
    transition: 0.25s;
  }
`;

const ModalContents = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  width: 250px;
  height: 150px;
  color: #1da1f2;
  font-size: 20px;
  font-weight: bold;
  border-radius: 15px;
  position: relative;
  animation: fadeInModal 0.25s;

  @keyframes fadeInModal {
    from {
    opacity: 0;
    margin-top: -80px;
    }
    to {
      opacity: 1;
      margin-top: 0;
    }
  }
}

}

  > .close-btn {
    position: absolute;
    top: 8px;
    right: 15px;
    font-size: 22px;
    cursor: pointer;

    &:hover {
      color: #1DA1F2;
      transition: 0.25s;
    }
    &:not(hover) {
      color: #ccc;
      transition: 0.25s;
    }
  }
`;

export default Modal;
