'use strict';

function grouping_count(collection) {

  //在这里写入代码
  //var all = {};
  //var array = [];
  //var length = collection.length;
  //var temp ;
  //var count = 0;
  //for(var i = 0;i < length; i++){
  //  for(var j = i+1; j < length; j++){
  //    if(collection[i] === collection[j] ){
  //      j = ++i;
  //    }
  //  }
  //  array.push(collection[i]);
  //  array = array.sort()
  //}
  //for(var l = 0;l < array.length; l++){
  //  temp = array[l];
  //  count = 0;
  //  for (var k = 0; k < collection.length; ){
  //     if(array[l] == collection[k]){
  //       count += 1;
  //       collection.splice(k,1);
  //       k--;
  //     }
  //    k++;
  //  }
  //  if(count !== 0){
  //    temp.number = count;
  //    all.push(temp);
  //  }
  //}
  //console.log(all);
  //return all;
  //return array;
  //var result = [];
  //var result = [];

  var result = {};
  //var result = new Array();
  //var collection = [1,1,1,1,2,3,1,3,4,2,3,1,3,4,2];

  var new_array = [];
  var length = collection.length;
  for(var i = 0;i < length; i++){
    for(var j = i+1; j < length; j++){
      //console.log('===========');
      //console.log(i);
      //console.log(j);
      //
      if(collection[i] === collection[j] ){
        j = ++i;
      }
    }
    new_array.push(collection[i]);
    //console.log(new_array);

  }


  for(var i=0;i<new_array.length;i++){
    var number = 0;
    var temp = new_array[i];
    for(var j =0;j < collection.length;j++){
      if (collection[j] == temp){
        number ++;
      }
    }
    result[temp] = number
    number = 0;
  }
  return result;



//
//Array.prototype.onlyone = function(){
//  var ra = new Array;
//  for (var i = 0; i < this.length; i++) {
//    if (!ra.contains(this[i])) {
//      ra.push(this[i]);
//    }
//  }
//  return ra;
//};
//  var array = new Array;
//  array = collection.onlyone();
//  console.log(array);
//};

  //return collection.uniquelize();
}

//module.exports = grouping_count;
