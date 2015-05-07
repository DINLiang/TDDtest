'use strict';

function collect_all_even(collection) {
  //在这里写入代码
  var array = [];
  for(var i = 0; i < collection.length; i ++)
  {
    if(collection[i]%2 == 0)
    {
      array.push(collection[i]);
    }
  }
  return array;
}

//module.exports = collect_all_even;
