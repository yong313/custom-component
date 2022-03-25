### 🎉 ****wanted-codestates-project-10****
✨ 원티드 프리온보딩 코스 - 개인 기업 과제 - 전용태

---

🎁  배포링크

- [배포링크](https://silly-tapioca-df23d1.netlify.app/)

<br />

💫  프로젝트 소개

- 추천 검색어 기능을 제공하는 검색창 구현

<br />

⚙️  프로젝트 기획

1. 필수 사항 및 도전 과제 확인
2. [figma](https://www.figma.com/file/Y2E9VQnkhouOGbKZd22VJx/%ED%9C%B4%EB%A8%BC%EC%8A%A4%EC%BC%80%EC%9D%B4%ED%94%84-%ED%81%B4%EB%A1%A0%EC%BD%94%EB%94%A9-%EC%A0%84%EC%9A%A9%ED%83%9C?node-id=0%3A1)를 사용 ui 디자인
3. GitHub Issues / Projects를 사용 ui구현 작업 및 기능 구현작업 기획

<br />

🔨  실행방법 - 1

1. 배포 된 주소로 접속해주세요. - [배포링크](https://silly-tapioca-df23d1.netlify.app/)
2. 질환명을 검색할 수 있는 검색창에 질환명을 입력해주세요.
3. 추천 검색어 목록은 키보드 상하 방향키로 이동하며 선택 가능합니다. 원하는 추천 검색어로 이동하여 엔터키를 누르면 해당 질환을 기반으로 한 임상시험 정보를 제공하는 웹 사이트로 이동합니다. 

<br />

🔧  실행방법 - 2


```jsx
git clone https://github.com/yong313/wanted-codestates-project-10.git

cd wanted-codestates-project-10

npm install

npm start
```

<br />

🛠 기능 시연 

1. 검색어 추천 기능

시연 gif 사용

<br />

1. 반응형

시연 gif 사용

<br />

👨🏻‍💻 기능 구현 목록

1. 검색어입력 시간의 간격을 사용 API호출 최적화
    
    > 검색창에 텍스트를 입력할 때마다 API 호출하는 것을 방지하기 위해 lodash의 debounce를 사용하여 0.25초의 API 호출의 간격을 두고 setTimeout을 사용하여 검색 중이라는 메시지를 0.45초 간격을 줘서 총 0.75초의 간격으로 검색어가 입력될 때마다 일어나는 불필요한 API 호출을 제어
    > 
    
    ```jsx
    // userInputHandler & debounce
    
    const userInputHandler = () => {
        setIsValue(true);
        timeOut = setTimeout(() => {
          setIsUserValue(userSearchInput.current.value);
        }, 450);
      };
    
      const debouceOn = debounce(userInputHandler, 250);
    ```
    
    api gif 넣어라~
    
    <br />
    
2. 추천 검색어 리스트를 키보드 방향키를 사용하여 이동 및 선택 esc키를 사용하여 추천 검색 리스트 닫기
    
    > swich 문과 JavaScript 키보드 이벤트를 사용하여 추천 검색어 리스트에서 제공하는 7개의 검색어를 이동 및 선택 추천 검색어 상태를 관리하는 targetIndex를 사용하여 props로 자식 요소인 AutoComplete에 전달하여 targetIndex와 index 값을 삼 항 연산자로 비교하여 true, false를 반환 map 함수로 생선 된 index숫자많큼 이동, 선택이 가능하고 선택된 영억 css를 조절하여 백그라운드 및 텍스트 컬러 값을 변경,
    > 
    
    ```jsx
    // 추천 검색어 상태관리
    const [targetIndex, setTargetIndex] = useState(-1);
    
    // onKeyUpHandler
    const onKeyUpHandler = (e) => {
        switch (e.key) {
          case "ArrowUp":
            if (targetIndex < 0) {
              return;
            } else {
              setTargetIndex(targetIndex - 1);
            }
            break;
          case "ArrowDown":
            if (targetIndex >= 7) {
              return;
            }
            setTargetIndex(targetIndex + 1);
            break;
          case "Escape":
            if (e.keyCode === 27) {
              setIsUserValue("");
            }
            break;
          case "Enter":
            if (e.key === "Enter" && targetIndex > -1) {
              buttonClickHandler();
            }
            break;
          default:
            break;
        }
      };
    
    // 검색 Input
    <SearchInput
      placeholder="질환명을 입력해 주세요."
      type="text"
      ref={userSearchInput}
      onChange={debouceOn}
      onKeyUp={onKeyUpHandler}
    />
    
    // 검색어 리스트
    <AutoList
    	key={data.id}
      idx={idx}
      targetIndex={targetIndex === idx ? false : true}
    >
    
    // 선택영역 css
    const AutoList = styled.div`
      width: 100%;
      height: 50px;
      display: flex;
      padding: 0 24px;
      align-items: center;
      color: ${(props) => (props.targetIndex ? "" : "#fff")};
      background-color: ${(props) => (props.targetIndex ? "#fff" : "#abcbfc")};
    
      .search_icon {
        color: ${(props) => (props.targetIndex ? "#505b65" : "#fff")};
      }
    `;
    ```
    
    api gif 넣어라~
    
    <br />
    
3. 엔터 및 검색 버튼 클릭으로 검색한 질환명 페이지로 이동
    
    > buttonClickHandler를 만들어 검색어 없이 엔터 혹은 검색 버튼을 클릭하면 alert를 사용하여 검색어를 입력하도록 유도, 검색어를 입력 시 url과 검색어를 담고 있는 userValue를 사용하여 해당 페이지로 이동
    > 
    
    ```jsx
    // buttonClickHandler
    const buttonClickHandler = () => {
        if (userValue === "") {
          return window.alert("검색어를 입력해 주세요.");
        }
        window.location.href = `https://clinicaltrialskorea.com/studies?condition=${userValue}`;
    };
    ```
    
    api gif 넣어라~
    
    <br />
    
4. 반응형 웹사이트 적용
    
    > 미디어 쿼리를 사용하여 반응형을 적용하였고, 모바일 사이즈가 되었을 때 모바일 전용 햄버거 매뉴 제공
    > 
    
    api gif 넣어라~

<br />    

🫠 어려웠던 점

검색 중 메세지
