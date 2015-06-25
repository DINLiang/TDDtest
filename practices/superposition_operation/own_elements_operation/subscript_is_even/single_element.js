'use strict';
var single_element = function(collection){

  var new_array = [];
  for(var k = 0;k < collection.length;k++){
    if(k % 2 === 0){
      new_array.push(collection[k]);
    }
  }
  var array = gets_array(new_array);
  return array;

};

function gets_array(new_array){
  var array = [];
  var length = new_array.length;
  for(var i = 0;i < length; i++){
    i = get_i(i,length,new_array);
    array.push(new_array[i]);
  }
  return array;
}

function get_i(i,length,new_array){
  for(var j = i+1; j < length; j++){
    if(new_array[i] === new_array[j] ){
      j = ++i;
    }
  }
  return i;
}
//module.exports = single_element;
