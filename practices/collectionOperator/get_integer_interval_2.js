'use strict';

function get_integer_interval_2(number_a, number_b) {
  //在这里写入代码
  var array = [];
  if(number_a > number_b)
  {
    array = left_bigger_right(number_a, number_b);
  }
  else if(number_a < number_b)
  {
    array = left_littles_right(number_a,number_b);
  }
  else if(number_a%2 == 0)
  {
    array.push(number_a);
  }
  return array;
}

function left_bigger_right(number_a, number_b){
  var array = [];
  for (var i = number_a; i > number_b; i--)
  {
    if (i >= number_b && i%2 == 0)
    {
      array.push(i);
    }
  }
  return array;
}

function left_littles_right(number_a, number_b){
  var array = [];
  for(var i = number_a;i <= number_b;i++)
  {
    if(i <= number_b && i%2 == 0)
    {
      array.push(i);
    }
  }
  return array;
}

//module.exports = get_integer_interval_2;
