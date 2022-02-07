### Wanted Pre Onboarding 🔥

#### 1. Modal Component 🍕

![22](https://user-images.githubusercontent.com/85574104/152647073-e196c5a4-30aa-4df3-af8d-69ae23ec2985.gif)

#### 구현 방법 .

> `useState 훅을` 이용하여 boolean `상태 값을 핸들링하는 ModalHandler` 함수를 만들어 모달을 열거나 닫도록 하였습니다.
> 상태 값을 변수로 사용하면 모달이 오픈될 때 `자동으로 Dom이 재 렌더링 되는 것을 방지하기 위해 useState를 사용`하여 구현하였습니다.

#### 어려웠던 점 해결 방법 .

> 1. 모달을 구현한 뒤 모달 영역을 클릭해도 모달이 닫히는 현상이 있었습니다. 이유는 부모 컴포넌트에 이벤트가 핸들러가 걸려있을 때 자식 컴포넌트에도 같은 핸들러가 작동이 되기 때문이었습니다. 이를 방지하기 위해 stopPropagation 메서드를 사용하여 자식 요소인 ModalContents 컴포넌트에 `onClick={(event) => {event.stopPropagation()}를 적용`하여 문제를 해결했습니다. 결과로 모달 영역 밖을 클릭 시 모달이 닫히지만 모달 영역을 클릭 시 닫히지 않게 구현하였습니다.

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

<br />

---

<br />

#### 2. Toggle Component 🍕
