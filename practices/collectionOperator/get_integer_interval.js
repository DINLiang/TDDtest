'use strict';

function get_integer_interval(number_a, number_b){
  //在这里写入代码
  var array = [];
   if(number_a > number_b){
     for(var i = number_a;i <= number_a;i--){
       if(i >= number_b){
         array.push(i);
       }
       else{
         break;
       }
     }
   }
  else if(number_a < number_b){
     for(var i = number_a;i <= number_b;i++){
         if(i <= number_b){
           array.push(i);
         }
       else{
         break;
       }
     }
   }
  else{
     array.push(number_a);
   }
  return array;
}

//module.exports = get_integer_interval;

