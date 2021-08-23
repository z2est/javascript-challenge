'use strict';

let result = null;
const ul = document.getElementById("content");

while(true){

    result = prompt("input string");

    if(!result)
        break;
    
    ul.insertAdjacentHTML("beforeend", "<li>" + result + "</li>");

}