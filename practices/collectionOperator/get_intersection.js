'use strict';

function get_intersection(collection_a, collection_b) {
  //在这里写入代码
  var array = [];
    for(var j = 0;j<collection_b.length;j++)
    {
      array = get_comment(collection_a,collection_b,j,array);
    }
  return array;
}

function get_comment(collection_a,collection_b,j,array){
  for(var i = 0;i <collection_a.length;i++)
  {
    if( collection_b[j] == collection_a[i])
    {
      array.push(collection_b[j]);
    }
  }
  return array;
}





//module.exports = get_intersection;
