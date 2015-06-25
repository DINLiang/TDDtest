'use strict';

function average_to_letter(collection) {
  //在这里写入代码
  var newArray = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  var sum = 0;
  for(var i = 0;i<collection.length;i++)
  {
    sum += collection[i];
  }
  var number = Math.ceil(sum/collection.length);
     var result = newArray[number - 1];
  return result;
}

//module.exports = average_to_letter;

