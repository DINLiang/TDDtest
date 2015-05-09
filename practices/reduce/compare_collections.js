'use strict';

function compare_collections(collection_a, collection_b) {
  //在这里写入代码

  //var collection_a = [1,11,27,20,4,9,15];
  //var collection_b = [1,11,27,20,4,9,15];
//  true
  var tf = '';
  for(var i = 0; i<collection_a.length;i++){
    for(var j = i; j<collection_b.length;j++){
      if(collection_a[i] === collection_b[j]){
         tf = true;
      }
      else{
        tf = false;
      }
    }
  }
  return tf;
}

//module.exports = compare_collections;


