'use strict';

function grouping_count(collection) {

  //在这里写入代码
  var all = {};
  var array = [];
  var length = collection.length;
  var temp ;
  var count = 0;
  for(var i = 0;i < length; i++){
    for(var j = i+1; j < length; j++){
      if(collection[i] === collection[j] ){
        j = ++i;
      }
    }
    array.push(collection[i]);
    array = array.sort()
  }
  for(var l = 0;l < array.length; l++){
    temp = array[l];
    count = 0;
    for (var k = 0; k < collection.length; ){
       if(array[l] == collection[k]){
         count += 1;
         collection.splice(k,1);
         k--;
       }
      k++;
    }
    if(count !== 0){
      temp.number = count;
      all.push(temp);
    }
  }
  console.log(all);
  return all;
  //return array;

}

//module.exports = grouping_count;
