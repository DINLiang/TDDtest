'use strict';

function median_to_letter(collection) {

  //在这里写入代码
  var new_array = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  if (collection.length % 2 == 0) {
    var mid =  Math.ceil((collection[collection.length / 2 - 1] + collection[collection.length / 2]) / 2);
  }
  else {
    mid = Math.ceil(collection[parseInt(collection.length / 2)]);
  }
  if ( mid > 26) {
    var ten = parseInt(mid / 26);
    var one = mid - ten * 26;
    if (mid % 26 == 0) {
      var left = new_array[ten - 2];
      var right = new_array [new_array.length - -(one - 1)];
    }
    else {
      left = new_array[ten - 1];
      right = new_array [one - 1];
    }
    var  lr = left + right;
    var array = lr;
  }
  else{
    array = new_array[mid - 1]
  }
  return array;
}

//module.exports = median_to_letter;
