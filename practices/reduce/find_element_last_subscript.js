'use strict';

function find_element_last_subscript(collection, element) {
  //在这里写入代码
  for(var i = 0;i < collection.length;i++)
  {
    if(collection[i] === element)
    {
      var position = i;
    }
  }
  return position;
}

//module.exports = find_element_last_subscript;
