'use strict';

function collect_min_number(collection) {
  //在这里写入代码
  var number = 0;
  for(var i = collection.length ;i >= 0;i--)
  {
    number = get_numbers(i,collection,number);
  }
  return number;
}

function get_numbers(i,collection,number){
  for(var j = i - 1;j >=0;j--)
  {
    number = collection[j];
    if( collection[j] > collection[i])
    {
      number = collection[i];
    }
  }
  return number;
}

//module.exports = collect_min_number;

