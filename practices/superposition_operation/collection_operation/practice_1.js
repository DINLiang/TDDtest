'use strict';

function hybrid_operation(collection) {

  //在这里写入代码
  //var collection = [1,5,7,11,35,67];
  var sum = 0;
  for(var i = 0;i < collection.length;i++){
    sum += collection[i]*3 + 2;
  }
  return sum;
}

//module.exports = hybrid_operation;

