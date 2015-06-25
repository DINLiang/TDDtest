'use strict';

function even_to_letter(collection) {
  //在这里写入代码
  var newArray = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  var array = [];
  for(var i = 0; i < collection.length;i++)
  {
    if( collection[i]%2 === 0 )
    {
      array.push(newArray[collection[i]-1]);
    }
  }
  return array;
}

//module.exports = even_to_letter;
