'use strict';

function get_integer_interval_2(number_a, number_b) {
  //在这里写入代码
  var array = [];
  if(number_a > number_b){
    for (var i = number_a; i > number_b; i--){
      if (i >= number_b && i%2 == 0){
        array.push(i);
      }
    }
  }
  else if(number_a < number_b){
    for(var i = number_a;i <= number_b;i++){
      if(i <= number_b && i%2 == 0){
        array.push(i);
      }
    }
  }
  else if(number_a%2 == 0){
    array.push(number_a);
  }
  return array;
}

//module.exports = get_integer_interval_2;
