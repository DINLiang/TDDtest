'use strict';
var even_group_calculate_average = function(collection){
    //three digits 三位数
   var one_digits = [];
   var two_digits = [];
   var three_digits = [];
   var array = [];
   var one_digits_sum = 0;
   var two_digits_sum = 0;
   var three_digits_sum = 0;
   for_one_two_three(collection,one_digits,two_digits,three_digits);
  one_digits_sum = for_sums(one_digits,one_digits_sum);
  two_digits_sum = for_sums(two_digits,two_digits_sum);
  three_digits_sum = for_sums(three_digits,three_digits_sum);
   array = for_array(one_digits,two_digits,three_digits,one_digits_sum,two_digits_sum,three_digits_sum,array);
   return array;
};

function for_one_two_three(collection,one_digits,two_digits,three_digits){
  for (var i = 0; i < collection.length; i++)
  {
    if (collection[i] % 2 === 0)
    {
      push_collection(collection,i,one_digits,two_digits,three_digits);
    }
  }
}

function push_collection(collection,i,one_digits,two_digits,three_digits){
  one_digits = push_collection_to_one(collection,i,one_digits);
  two_digits = push_collection_to_two(collection,i,two_digits);
  three_digits = push_collection_to_three(three_digits,collection,i);
}

function push_collection_to_one(collection,i,one_digits){
  if (collection[i] >= 0 && collection[i] <= 9)
  {
    one_digits.push(collection[i]);
  }
  return one_digits;
}

function push_collection_to_two(collection,i,two_digits){
  if (collection[i] > 9 && collection[i] <= 99)
  {
    two_digits.push(collection[i]);
  }
  return two_digits;
}

function push_collection_to_three(three_digits,collection,i){
  if(collection[i] > 99)
  {
    three_digits.push(collection[i]);
  }
  return three_digits;
}

function for_sums(number,sum){
  for (var j = 0; j < number.length; j++)
  {
    sum += number[j];
  }
  return sum;
}

function for_array(one_digits,two_digits,three_digits,one_digits_sum,two_digits_sum,three_digits_sum,array){
  if(one_digits.length === 0)
  {
    array = 0;
  }
  else
  {
    array.push(Math.floor(one_digits_sum / one_digits.length));
    array.push(Math.floor(two_digits_sum / two_digits.length));
    array.push(Math.floor(three_digits_sum / three_digits.length));
  }
  return array;
}
//module.exports = even_group_calculate_average;
