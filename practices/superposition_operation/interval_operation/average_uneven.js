'use strict';

function average_uneven(collection) {
  //在这里写入代码
  var number = 0;
  for(var i = 0;i<collection.length;i++)
  {
    if(collection[i]%2 !== 0)
    {
      number += collection[i];
    }
  }
  var average_number = number/collection.length*2;
  return average_number;
}
//module.exports = average_uneven;
