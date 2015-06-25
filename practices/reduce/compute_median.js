'use strict';

function compute_median(collection) {
  //在这里写入代码
  var mid = collection[parseInt(collection.length / 2)];
  if (collection.length % 2 == 0)
  {
     mid = (collection[collection.length / 2 - 1] + collection[collection.length / 2]) / 2;
  }
  return mid;
}

//module.exports = compute_median;


