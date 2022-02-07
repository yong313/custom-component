### Wanted Pre Onboarding 🔥

#### 1. Modal Component 🍕

![22](https://user-images.githubusercontent.com/85574104/152647073-e196c5a4-30aa-4df3-af8d-69ae23ec2985.gif)

#### 구현 방법 .

> useState 훅을 이용하여 boolean 상태 값을 핸들링하는 ModalHandler 함수를 만들어 모달을 열거나 닫도록 하였습니다.
> 상태 값을 변수로 사용하면 모달이 오픈될 때 자동으로 Dom이 재 렌더링 되는 것을 방지하기 위해 useState를 사용하여 구현하였습니다.

#### 어려웠던 점 해결 방법 .

> 모달을 구현한 뒤 모달 영역을 클릭해도 모달이 닫히는 현상이 있었습니다. 이유는 부모 컴포넌트에 이벤트가 핸들러가 걸려있을 때 자식 컴포넌트에도 같은 핸들러가 작동이 되기 때문이었습니다. 이를 방지하기 위해 stopPropagation 메서드를 사용하여 자식 요소인 ModalContents 컴포넌트에 onClick={(event) => {event.stopPropagation()}를 적용하여 문제를 해결했습니다. 결과로 모달 영역 밖을 클릭 시 모달이 닫히지만 모달 영역을 클릭 시 닫히지 않게 구현하였습니다.

```jsx

<ModalContents
  onClick={(event) => {
    event.stopPropagation();
  }}
>

```

#### 자세한 실행 방법 .

> 1. useState 훅을 이용하여 boolean 상태 값을 핸들링하는 ModalHandler 함수를 만들어 모달을 열거나 닫을 수 있습니다.
> 2. 오픈 된 모달 팝업의 부모 요소 뒷배경이 높아 스크롤이 생길 시 ovflow hidden을 사용하여 스크롤을 막아 모달 팝업에 포커스를 맞췄습니다.
> 3. keyPress 함수에 useCallback으로 boolean 상태 값 핸들링을 재사용하고 useEffect를 사용하여 esc키로 모달을 닫을 수 있도록 편의성을 높였습니다.
> 4. stopPropagation 메서드를 사용하여 오픈 된 모달 영역을 클릭 시에는 모달창이 닫히지 않지만 모달영역 이외의 공간 을 클릭시 모달을 닫을 수 있도록 편의성을 높였습니다.

---

#### 2. Toggle Component 🍕

![toggle](https://user-images.githubusercontent.com/85574104/152837336-10015baa-dae0-4d72-bc78-960667724a2d.gif)

#### 구현 방법 .

> useState 훅을 이용하여 boolean 상태 값을 핸들링하는 ToggleHandler 함수를 만들어 토글의 스위치를 켜거나 끄도록 하였습니다.
> 상태 값을 변수로 사용하면 토글의 스위치가 켜질때 자동으로 Dom이 재 렌더링 되는 것을 방지하기 위해 useState를 사용하여 구현하였습니다.

#### 어려웠던 점 해결 방법 .

> 토글스위치가 켜질 때 뒷배경과 토글 버튼이 좌측에서 우측으로 이동되는 움직임을 만드는 게 어려웠습니다. linear-gradient를 사용하여 배경이 한쪽에서 부터 점점 채워지는 느낌으로 구현할 수 있었고, 토글 UI에서는 isToggleOn 상태를 활용해서 className을 변경해 주는 방식으로 css를 적용하여 토글스위치가 움직이는 것을 구현할 수 있었습니다.

```jsx
<ToggleBox onClick={toggleHandler}>
  <div className={`toggle_bg ${isToggleOn ? "toggle_check" : ""}`} />
  <div className={`toggle_ball ${isToggleOn ? "toggle_check" : ""}`} />
</ToggleBox>
```

```css
  .toggle_bg {
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
```

#### 자세한 실행 방법 .

> 1. useState 훅을 이용하여 boolean 상태 값을 핸들링하는 ToggleHandler 함수를 만들어 토글의 스위치를 켜거나 끄도록 하였습니다.
> 2. 토글 UI에서는 isToggleOn 상태를 활용해서 className을 변경해 주는 방식으로 css를 적용하여 토글스위치가 움직이는 것을 구현할 수 있었습니다.
> 3. 토글스위치 하단의 텍스트 또한 isToggleOn 상태를 활용해서 상태에 맞게 "Toggle Switch ON", "Toggle Switch OFF"출력 되도록 하였습니다.

---

#### 3. Tab Component 🍕

![tab](https://user-images.githubusercontent.com/85574104/152844303-f1502168-3f74-4270-b98d-56d9e35d157e.gif)

#### 구현 방법 .

> li 엘리먼트를 map 함수로 menu의 숫자만큼 만들어 준 뒤, 인덱스를 두 번째 인자로 넣어서 onClick 핸들러 함수에 index를 전달했습니다. 그리고 인덱스를 전달받은 함수를 통해서 currentTab 상태를 해당 인덱스로 바꿔주며클릭 된 Tab의 className을 변경하고 클릭 된 메뉴의 CSS 값을 변경, 선택된 li이 엘리먼트를 시각화 시켜줄 수 있게 됩니다.

#### 어려웠던 점 해결 방법 .

> map함수의 두번째 인자로 index를 넣어서 핸들러 함수에 전달해주는 것이 포인트인데, map 함수 두번째 인자로 index를 넣어줄 수 있다는 것을 처음 알게되었습니다.

```jsx
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
```

#### 자세한 실행 방법 .

> 1. li 엘리먼트를 map 함수로 menu의 개수만큼 만들었습니다.
> 2. 인덱스를 두 번째 인자로 넣어서 onClick 핸들러 함수에 index를 전달합니다.
> 3. 인덱스를 전달받은 함수를 통해서 currentTab 상태를 해당 인덱스로 바꿔주면서 클릭된 Tab의 className을 바꿔주므로 인해서 클릭 된 메뉴의 CSS 속성만 바꿔 선택되었음을 시각화 시켜줄 수 있게 하였습니다.
 
---

#### 4. Tag Component 🍕

![tag](https://user-images.githubusercontent.com/85574104/152848563-5b0af22a-541b-47d9-9cc5-ce288260247d.gif)

#### 구현 방법 .

> 

#### 어려웠던 점 해결 방법 .

> 1. 

#### 자세한 실행 방법 .

 
---
