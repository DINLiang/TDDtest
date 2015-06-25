'use strict';
var even_group_calculate_average = function(collection){
    var one = [];
    var two = [];
    var three = [];
    var array = [];
    var one_sum = 0;
    var two_sum = 0;
    var three_sum = 0;
   for_one_two_three(collection,one,two,three);
   one_sum = for_one_sum(one,one_sum);
   two_sum = for_two_sum(two,two_sum);
   three_sum = for_three_sum(three,three_sum);
   array = for_array(one,two,three,one_sum,two_sum,three_sum,array);
   return array;
};

function for_one_two_three(collection,one,two,three){
  for (var i = 0; i < collection.length; i++)
  {
    if (collection[i] % 2 === 0)
    {
      push_collection(collection,i,one,two,three);
    }
  }
}

function push_collection(collection,i,one,two,three){
  one = push_collection_to_one(collection,i,one);
  two = push_collection_to_two(collection,i,two);
  three = push_collection_to_three(three,collection,i);
}

function push_collection_to_one(collection,i,one){
  if (collection[i] >= 0 && collection[i] <= 9)
  {
    one.push(collection[i]);
  }
  return one;
}

function push_collection_to_two(collection,i,two){
  if (collection[i] > 9 && collection[i] <= 99)
  {
    two.push(collection[i]);
  }
  return two;
}

function push_collection_to_three(three,collection,i){
  if(collection[i] > 99)
  {
    three.push(collection[i]);
  }
  return three;
}

function for_one_sum(one,one_sum){
  for (var j = 0; j < one.length; j++)
  {
    one_sum += one[j];
  }
  return one_sum;
}

function for_two_sum(two,two_sum){
  for (var k = 0; k < two.length; k++)
  {
    two_sum += two[k];
  }
  return two_sum;

}

function for_three_sum(three,three_sum){
  for (var l = 0; l < three.length; l++)
  {
    three_sum += three[l];
  }
  return three_sum;
}

function for_array(one,two,three,one_sum,two_sum,three_sum,array){
  if(one.length === 0)
  {
    array = 0;
  }
  else
  {
    array.push(Math.floor(one_sum / one.length));
    array.push(Math.floor(two_sum / two.length));
    array.push(Math.floor(three_sum / three.length));
  }
  return array;
}

//module.exports = even_group_calculate_average;
