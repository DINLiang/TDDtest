'use strict';

function compute_median(collection) {
  //在这里写入代码
  if (collection.length % 2 == 0) {
    var mid = (collection[collection.length / 2 - 1] + collection[collection.length / 2]) / 2;
  }
  else {
    mid = collection[parseInt(collection.length / 2)];
  }
  return mid;
}

//module.exports = compute_median;


