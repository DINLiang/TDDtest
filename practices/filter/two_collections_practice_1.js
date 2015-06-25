'use strict';

function choose_common_elements(collection_a, collection_b) {
  //在这里写入代码
  var array = [];
    for(var i = 0;i < collection_a.length;i++)
    {
      array = get_array(collection_b,collection_a,i,array);
    }
   return array;
}

function get_array(collection_b,collection_a,i,array){
  for(var j = 0;j < collection_b.length;j++)
  {
    if(collection_a[i] === collection_b[j])
    {
      array.push(collection_a[i]);
    }
  }
  return array;
}

//module.exports = choose_common_elements;
