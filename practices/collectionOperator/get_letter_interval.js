'use strict';

function get_letter_interval(number_a, number_b) {
  //在这里写入代码
  var array = [];
  var new_array = ['a','b','c','d','e'];
  if(number_a > number_b)
  {
    array = lefts_big_right(number_a, number_b,array,new_array)
  }
  else if(number_a < number_b)
  {
    array = lefts_little_right(number_a, number_b,array,new_array)
  }
  else{
    array.push(new_array[number_a - 1]);
  }
  return array;
}

function lefts_big_right(number_a, number_b,array,new_array){
  for(var i = number_a;i >= number_b;i--)
  {
      array.push(new_array[i-1]);
    }
  return array;
}

function lefts_little_right(number_a, number_b,array,new_array){
  for(var i = number_a;i <= number_b;i++)
  {
      array.push(new_array[i-1]);
  }
  return array;
}
//module.exports = get_letter_interval;
