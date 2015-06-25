'use strict';

function double_to_one(collection) {
  var array = two_translate_one_array(collection);
  var new_Array = {},
      len = array.length,
      result = [];
  for(var i=0;i<len;i++){
    if(!new_Array[array[i]]){
      new_Array[array[i]] = true;
      result.push(array[i]);
    }
  }
  return result;
}

//module.exports = double_to_one;
