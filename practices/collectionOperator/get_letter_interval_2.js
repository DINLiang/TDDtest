'use strict';

function get_letter_interval_2(number_a, number_b){
  //在这里写入代码
  var array = [];
  var new_array = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  var newArray = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  var one = 0;
  var ten = 0;
  if(number_a > number_b){
    for(var i = number_a;i <= number_a;i--){
      if(i >= number_b){
        one = i - i/10;
        ten = i - ((i - one)/100);
        array.push(new_array['one'+'ten']);
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
//var new_array = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

//module.exports = get_letter_interval_2;

