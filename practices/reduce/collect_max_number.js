'use strict';

function collect_max_number(collection) {
  //在这里写入代码
  var number = 0;
  for(var i = 1 ;i < collection.length;i++)
  {
    number = get_number(i,collection,number);
  }
  return number;
}

function get_number(i,collection,number){
  for(var j = i - 1 ;j < collection.length;j++)
  {
    if( collection[j] < collection[i])
    {
      number = collection[i];
    }
  }
  return number;
}

//module.exports = collect_max_number;
