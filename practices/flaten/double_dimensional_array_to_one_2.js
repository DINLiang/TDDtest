'use strict';

function double_to_one(collection) {

  //在这里写入代码
  var array  = [];
  var new_Array =[];
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
  var length = array.length;
  for(var i = 0;i < length; i++) {
    for (var j = i + 1; j < length; j++) {
      if (array[i] === array[j]) {
        j = ++i;
      }
    }
    new_Array.push(array[i]);
  }
  array = new_Array;
  return array;
}

//module.exports = double_to_one;
