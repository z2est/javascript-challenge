'use strict';

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

  
  function createTree(container, data) { 
    for(var elem in data){
      if(Object.keys(data[elem]).length > 0){
        container.insertAdjacentHTML("beforeend", "<li>" + elem + "</li><ul></ul>");
        let lastElem = container.lastChild;
        createTree(lastElem, data[elem])
      }
      else
        container.insertAdjacentHTML("beforeend", "<li>" + elem + "</li>");
    }
  }
  
  let container = document.getElementById('container');
  createTree(container, data); // creates the tree in the container