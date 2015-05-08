'use strict';

function get_letter_interval_2(number_a, number_b){
  var new_array = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  //var newArray = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  var one = 0;
  var ten = 0;
  var left = '';
  var right = '';
  var array = [];
  var lr = '';
  if(number_a > number_b){
    for(var i = number_a;i <= number_a;i--){
      if(i >= number_b) {
        if (i > 26) {
          ten = parseInt(i / 26);
          one = i - ten * 26;
          if(i % 26 == 0) {
            left = new_array[ten -2];
            right = new_array [new_array.length -  -(one - 1)];
          }
          else {
            left = new_array[ten - 1];
            right = new_array [one - 1];
          }
           lr = left + right;
          array.push(lr);
        }
        else{
          array.push(new_array[i-1]);
        }
      }
      else{
        break;
      }
    }
  }
  else if(number_a < number_b) {
      for (var i = number_a; i <= number_b; i++) {
        if (i <= number_b) {
          if (i > 26) {
            ten = parseInt(i / 26);
            one = i - ten * 26;
            if (i % 26 == 0) {
              left = new_array[ten - 2];
              right = new_array [new_array.length - -(one - 1)];
            }
            else {
              left = new_array[ten - 1];
              right = new_array [one - 1];
            }
             lr = left + right;
            array.push(lr);
          }
          else {
            array.push(new_array[i - 1]);
          }
        }
        else {
          break;
        }
      }
    }
  else if(number_a == number_b){
    ten = parseInt(number_a / 26);
    one = number_a - ten * 26;
    left = new_array[ten - 1];
    right = new_array [one - 1];
     lr = left + right;
    array.push(lr);
  }
  return array;
}
//var new_array = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

//module.exports = get_letter_interval_2;

