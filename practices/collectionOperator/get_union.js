'use strict';

function get_union(collection_a, collection_b) {
  //在这里写入代码
  //var collection_a = [10, 27, 28, 19, 5];
  //var collection_b = [5, 78, 28, 19, 23];
  //var collection_c = [10, 27, 28, 19, 5, 78, 23];

  var array = [];
  var k = 0;
    for(var j = 0;j < collection_b.length;j++){
      for(var i = 0;i < collection_a.length;i++){
      if(collection_b[j] !== collection_a[i]){
          k = j ;
      }
    }
    array.push(collection_b[k]);
  }





    return array;
}
//module.exports = get_union;

