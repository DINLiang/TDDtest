'use strict';
var number_map_to_word_over_26 = function(collection){

  var new_array = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  var array = [];
for(var i = 0; i < collection.length;i++) {
  if (collection[i] > 26) {
   var ten = parseInt(collection[i] / 26);
    var one = collection[i] - ten * 26;
    if (collection[i] % 26 == 0) {
     var left = new_array[ten - 2];
      var right = new_array [new_array.length - -(one - 1)];
    }
    else {
      left = new_array[ten - 1];
      right = new_array [one - 1];
    }
    var  lr = left + right;
    array.push(lr);
  }
  else{
    array.push(new_array[collection[i]-1]);
  }
}
return array;




};

//module.exports = number_map_to_word_over_26;
