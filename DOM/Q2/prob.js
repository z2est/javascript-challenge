'use strict';

function clear(elem)
{
    elem.childNodes.forEach(function(node) {
        elem.remove(node);
    });
    console.log("done");
}