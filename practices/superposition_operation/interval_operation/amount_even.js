'use strict';

function amount_even(collection) {

  //在这里写入代码
  var number = 0;
  for(var i = 0;i<collection.length;i++){
    if(collection[i]%2 === 0){
      number += collection[i];
    }
  }
  return number;
}

//module.exports = amount_even;
