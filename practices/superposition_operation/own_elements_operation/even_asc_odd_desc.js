'use strict';
var even_asc_odd_desc = function(collection){


  var left_array = [];
  var right_array = [];
  for(var i = 0;i<collection.length;i++)
  {
    if(collection[i]%2 === 0)
    {
      left_array.push(collection[i]);
    }
    else
    {
      right_array.push(collection[i]);
    }
  }
  left_array.sort(function(a,b){return a>b?1:-1});
  right_array.sort(function(a,b){return a<b?1:-1});
  var result = left_array.concat(right_array);
  return result;
};
//module.exports = even_asc_odd_desc;
