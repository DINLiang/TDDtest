'use strict';

function get_integer_interval(number_a, number_b){
  //在这里写入代码
  var array = [];
  if(number_a > number_b)
  {
    array = left_big_right(number_a, number_b);
  }
  if(number_a < number_b)
  {
    array = left_little_right(number_a, number_b);
  }
  array = eq(number_a,number_b,array);
  return array;
}

function big(number_a,number_b,array){
  console.log("bbbbbbbbbbbbbbbbbbb");
  //console.log(array);
  if(number_a > number_b){
    array = left_big_right(number_a, number_b);
  }
  //console.log(array);
  return array;
}

function little(number_a,number_b,array){
  if(number_a < number_b){
    array = left_little_right(number_a, number_b);
  }
  return array;
}

function eq(number_a,number_b,array){
  if(number_a == number_b)
  {
    array.push(number_a);
  }
  return array;
}

function left_big_right(number_a, number_b){
  var array = [];
    for(var i = number_a;i >= number_b;i--)
    {
        array.push(i);
    }
  return array;
}

function left_little_right(number_a, number_b){
  var array = [];
    for(var i = number_a;i <= number_b;i++)
    {
        array.push(i);
    }
  return array;
}

//module.exports = get_integer_interval;

