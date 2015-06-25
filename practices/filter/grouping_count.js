'use strict';

function grouping_count(collection) {
  var result = {};
  var  array =  uniq_number(collection);
  for(var i=0;i<array.length;i++)
  {
    result = get_number(collection,array,i,result);
  }
  return result;
}

function get_number(collection,array,i,result){
  var number = 0;
  var temp = array[i];
  for(var j =0;j < collection.length;j++)
  {
    if (collection[j] == temp)
    {
      number ++;
    }
  }
  result[temp] = number;
  return result;
}


//module.exports = grouping_count;
