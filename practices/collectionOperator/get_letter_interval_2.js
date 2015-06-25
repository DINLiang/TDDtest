'use strict';

function get_letter_interval_2(number_a, number_b){
  var new_array = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  var array = [];
  array = lefts_big_rights(number_a,number_b,array,new_array);
  array = lefts_little_rights(number_a,number_b,array,new_array);
  array = lefts_same_rights(number_a,number_b,array,new_array);
  return array;
}

function lefts_big_rights(number_a,number_b,array,new_array){
  if(number_a > number_b)
  {
    for(var i = number_a;i >= number_b;i--)
    {
        array = for_condition(i,new_array,array);
    }
  }
  return array;
}

function lefts_little_rights(number_a,number_b,array,new_array){
  if(number_a < number_b)
  {
    for (var i = number_a; i <= number_b; i++)
    {
        array = for_condition(i,new_array,array);
    }
  }
  return array;
}
//ones 个位数  tens 十位数
function lefts_same_rights(number_a,number_b,array,new_array){
  if(number_a == number_b){
    var tens = parseInt(number_a / 26);
    var ones = number_a - tens * 26;
    var left = new_array[tens - 1];
    var right = new_array [ones - 1];
    var lr = left + right;
    array.push(lr);
  }
  return array;
}

function for_condition(i,new_array,array){
  if (i > 26)
  {
    array = get_mod_number(i,new_array,array);
  }
  else
  {
    array.push(new_array[i-1]);
  }
  return array;
}

function get_mod_number(i,new_array,array){
  var tens = parseInt(i / 26);
  var ones = i - tens * 26;
  var left = new_array[tens - 1];
  var right = new_array [ones - 1];
  if(i % 26 == 0)
  {
     left = new_array[tens -2];
     right = new_array [new_array.length -  -(ones - 1)];
  }
  var lr = left + right;
  array.push(lr);
  return array;
}

//module.exports = get_letter_interval_2;

