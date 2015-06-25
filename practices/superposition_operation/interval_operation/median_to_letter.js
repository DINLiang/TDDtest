'use strict';

function median_to_letter(collection) {
  //在这里写入代码
  var new_array = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  var mid = Math.ceil(collection[parseInt(collection.length / 2)]);

  if (collection.length % 2 == 0)
  {
     mid =  Math.ceil((collection[collection.length / 2 - 1] + collection[collection.length / 2]) / 2);
  }
  var array = get_array(mid,new_array);
  return array;
}

function get_array(mid,new_array){
  if ( mid > 26)
  {
    var array_new;
    var array = for_condition_to_letters(mid,array_new,new_array);
  }
  else
  {
    array = new_array[mid - 1]
  }
  return array;
}

function for_condition_to_letters(mid,array_new,new_array){
  var ten = parseInt(mid / 26);
  var one = mid - ten * 26;
  left = new_array[ten - 1];
  right = new_array [one - 1];
  if (mid % 26 == 0)
  {
    var left = new_array[ten - 2];
    var right = new_array [new_array.length - -(one - 1)];
  }
  var  lr = left + right;
      array_new = lr;
  return array_new;
}
//module.exports = median_to_letter;
