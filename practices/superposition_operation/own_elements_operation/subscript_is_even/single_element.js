'use strict';
var single_element = function(collection){

  var new_array = [];
  for(var k = 0;k < collection.length;k++){
    if(k % 2 === 0){
      new_array.push(collection[k]);
    }
  }
  var array = [];
  var length = new_array.length;
  for(var i = 0;i < length; i++){
    for(var j = i+1; j < length; j++){
      if(new_array[i] === new_array[j] ){
        j = ++i;
      }
    }
    array.push(new_array[i]);
  }
  return array;

};
//module.exports = single_element;
