'use strict';

function find_last_even(collection) {
  //在这里写入代码
  for(var i = 0;i< collection.length;i++)
  {
    if(collection[i]%2 === 0)
    {
      var number = collection[i];
    }
  }
  return number;
}

//module.exports = find_last_even;
