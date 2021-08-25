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

  function recursionTree(elem, data){
    let lstChild = null;
    for(var el in data){
      if(el !== {}){
        elem.insertAdjacentHTML("beforeend", "<li>" + el + "</li>");
        lstChild = container.lastChild;
      }
    }
    return lstChild;
  }
  
  function createTree(container, data) { 
    for(var elem in data){
      if(elem !== {}){
        container.insertAdjacentHTML("beforeend", "<li>" + elem + "</li>");
        let lastElem = container.lastChild;
        if(data[elem] !== {}){
          lastElem.insertAdjacentHTML("beforeend", "<ul></ul>");
          lastElem = lastElem.lastChild;
          for(var i in data[elem])
          {
            lastElem.insertAdjacentHTML("beforeend", "<li>" + i + "</li>");
          }
        }

      }
    }
  }
  
  let container = document.getElementById('container');
  createTree(container, data); // creates the tree in the container