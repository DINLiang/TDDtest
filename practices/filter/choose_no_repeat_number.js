'use strict';

function choose_no_repeat_number(collection) {

  //在这里写入代码
  var array = [];
  var length = collection.length;
  for(var i = 0;i < length; i++){
    for(var j = i+1; j < length; j++){
      if(collection[i] === collection[j] ){
        j = ++i;
      }
    }
    array.push(collection[i]);
  }
  //console.log(ret);
  return array;
}

//module.exports = choose_no_repeat_number;
