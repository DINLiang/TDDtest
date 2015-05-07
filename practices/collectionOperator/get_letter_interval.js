'use strict';

function get_letter_interval(number_a, number_b) {
  //在这里写入代码
  var array = [];
  var new_array = ['a','b','c','d','e']
  if(number_a > number_b){
    for(var i = number_a;i <= number_a;i--){
      if(i >= number_b){
        array.push(new_array[i-1]);
      }
      else{
        break;
      }
    }
  }
  else if(number_a < number_b){
    for(var i = number_a;i <= number_b;i++){
      if(i <= number_b){
        array.push(new_array[i-1]);
      }
      else{
        break;
      }
    }
  }
  else{
    array.push(new_array[number_a - 1]);
  }
  return array;
}

//module.exports = get_letter_interval;
