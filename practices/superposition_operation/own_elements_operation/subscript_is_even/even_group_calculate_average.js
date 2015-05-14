'use strict';
var even_group_calculate_average = function(collection){

    var one = [];
    var two = [];
    var three = [];
    var array = [];
    var one_sum = 0;
    var two_sum = 0;
    var three_sum = 0;
    for (var i = 0; i < collection.length; i++) {
      if (collection[i] % 2 === 0){
        if (collection[i] >= 0 && collection[i] <= 9) {
          one.push(collection[i]);
        }
        else if (collection[i] > 9 && collection[i] <= 99) {
          two.push(collection[i]);
        }
        else {
          three.push(collection[i]);
        }
      }
    }
    for (var j = 0; j < one.length; j++) {
      one_sum += one[j];
    }
    for (var k = 0; k < two.length; k++) {
      two_sum += two[k];
    }
    for (var l = 0; l < three.length; l++) {
      three_sum += three[l];
    }
    if(one.length === 0){
       array = 0;
    }
    else {
      array.push(Math.floor(one_sum / one.length));
      array.push(Math.floor(two_sum / two.length));
      array.push(Math.floor(three_sum / three.length));
    }
    return array;
  //function get_zero(){
  //  var array = 0;
  //  for (var p = 0; p < collection.length; p++) {
  //    if (collection[p] % 2 !== 0) {
  //      continue;
  //    }
  //    else if (collection[p] % 2 !== 0 && p == collection.length - 1) {
  //      array = 0;
  //    }
  //  }
  //  return array;
  //}
};
//module.exports = even_group_calculate_average;
