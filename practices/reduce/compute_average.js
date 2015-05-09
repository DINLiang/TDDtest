'use strict';

function compute_average(collection) {
  //在这里写入代码
  var number = 0;
  for(var i = 0;i < collection.length;i++){
    number += collection[i];
  }
  number = number/collection.length;
  return number;
}

//module.exports = compute_average;

