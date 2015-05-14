'use strict';
var calculate_median = function(collection) {

  collection = collection.sort();
  if (collection.length % 2 == 0) {
    var mid = Math.ceil((collection[collection.length / 2 - 1] + collection[collection.length / 2]) / 2);
  }
  else {
    mid = Math.ceil(collection[parseInt(collection.length / 2)]);
  }
  return mid;
};
//module.exports = calculate_median;
