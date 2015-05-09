'use strict';

function compute_chain_median(collection) {
  //在这里写入代码
  var array = collection.split('->');
  if( array.length%2 == 0 ){
   var mid = (parseInt(array[array.length/2 - 1]) + parseInt(array[array.length/2]))/2;
  }
  else{
    mid = array[parseInt(array.length/2)];
  }
  return mid;
}

//module.exports = compute_chain_median;
