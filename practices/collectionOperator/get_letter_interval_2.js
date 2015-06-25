'use strict';

function get_letter_interval_2(number_a, number_b){
  var new_array = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  var one = 0;
  var ten = 0;
  var left = '';
  var right = '';
  var array = [];
  var lr = '';
  array = big(number_a,number_b,array,ten,one,left,right,new_array,lr);
  array = little(number_a,number_b,array,ten,one,left,right,new_array,lr);
  array = same(number_a,number_b,array,ten,one,left,right,new_array,lr);
  return array;
}

function big(number_a,number_b,array,ten,one,left,right,new_array,lr){
  if(number_a > number_b)
  {
    for(var i = number_a;i >= number_b;i--)
    {
        array = for_condition(i,ten,one,left,right,new_array,lr,array);
    }
  }
  return array;
}

function little(number_a,number_b,array,ten,one,left,right,new_array,lr){
  if(number_a < number_b)
  {
    for (var i = number_a; i <= number_b; i++)
    {
        array = for_condition(i,ten,one,left,right,new_array,lr,array);
    }
  }
  return array;
}

function same(number_a,number_b,array,ten,one,left,right,new_array,lr){
  if(number_a == number_b){
    ten = parseInt(number_a / 26);
    one = number_a - ten * 26;
    left = new_array[ten - 1];
    right = new_array [one - 1];
    lr = left + right;
    array.push(lr);
  }
  return array;
}

function for_condition(i,ten,one,left,right,new_array,lr,array){
  if (i > 26)
  {
    array = get_mod_number(i,left,new_array,ten,right,one,lr,array);
  }
  else
  {
    array.push(new_array[i-1]);
  }
  return array;
}

function get_mod_number(i,left,new_array,ten,right,one,lr,array){
  ten = parseInt(i / 26);
  one = i - ten * 26;
  if(i % 26 == 0)
  {
    left = new_array[ten -2];
    right = new_array [new_array.length -  -(one - 1)];
  }
  else
  {
    left = new_array[ten - 1];
    right = new_array [one - 1];
  }
  lr = left + right;
  array.push(lr);
  return array;
}

//module.exports = get_letter_interval_2;

