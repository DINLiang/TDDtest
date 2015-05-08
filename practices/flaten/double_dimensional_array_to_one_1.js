'use strict';

function double_to_one(collection) {

  //在这里写入代码
  var array  = [];
  for(var i = 0;i< collection.length;i++){
    var new_array = collection[i];
    if( new_array instanceof Array == true ){
    for(var j = 0;j< new_array.length;j++){
      array.push(new_array[j]);
     }
    }
    else{
      array.push(new_array);
    }
  }
  return array;
}

//module.exports = double_to_one;
