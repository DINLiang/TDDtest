'use strict';

function collect_min_number(collection) {
  //在这里写入代码
  var number = 0;
  for(var i = collection.length ;i >= 0;i--){
    for(var j = i - 1 ;j >=0;j--){
      if( collection[j] > collection[i] ){
        number = collection[i];
      }
      else{
        number = collection[j];
      }
    }
  }
  return number;
}

//module.exports = collect_min_number;

