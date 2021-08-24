# DOM Challenge

## Q1) prompt로 입력받은 텍스트로 List를 생성해보세요.

1. `prompt`를 사용하여 사용자로부터 리스트 항목의 내용을 입력받습니다.
2. 입력받은 텍스트를 `<li>`로 감싸서 `<ul>`에 추가합니다.
3. 사용자가 `Esc` 키를 누르거나 취소 버튼을 누르기 전까지는 계속 입력할 수 있습니다.
4. 확인 버튼을 누르면 화면에 렌더링합니다.

## Q2) 엘리먼트를 받아서 내부의 노드를 삭제하는 clear 함수를 완성해보세요.

```html
<ol id="elem">
  <li>Hello</li>
  <li>World</li>
</ol>
```

```jsx
function clear(elem) { /* your code */ }

clear(elem);
```

## Q3) 오브젝트를 받아서 트리 구조로 생성해보세요.

```html
<div id="container"></div>
```

```jsx
let data = {
  "개발본부": {
    "디자인팀": {},
    "서비스개발팀": {},
    "주문개발팀": {},
  },

  "지원본부": {
    "인사담당": {
      "인사팀": {},
      "인재영입팀": {},
      "기업문화팀": {},
    },
    "관리담당": {
      "경영관리팀": {},
      "총무팀": {},
    },
  },
};

function createTree(container, data) { /* your code */ }

let container = document.getElementById('container');
createTree(container, data); // creates the tree in the container
```

