'use strict';
var calculate_average = function(collection){
  var sum = 0;
  for(var i = 0 ;i < collection.length;i++)
  {
     sum += collection[i];
  }
  var number = Math.floor(sum/collection.length);
  return number;
};
//module.exports = calculate_average;
