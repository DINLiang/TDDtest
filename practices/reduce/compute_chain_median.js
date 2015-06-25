'use strict';

function compute_chain_median(collection) {
  //在这里写入代码
  var array = collection.split('->');
  var mid = array[parseInt(array.length/2)];
  if( array.length%2 == 0 )
  {
    mid = (parseInt(array[array.length/2 - 1]) + parseInt(array[array.length/2]))/2;
  }
  return mid;
}

//module.exports = compute_chain_median;
