'use strict';

function compare_collections(collection_a, collection_b) {
  //在这里写入代码

  var tf = '';
  for(var i = 0; i<collection_a.length;i++)
  {
    tf = get_tf(i,collection_b,collection_a,tf);
  }
  return tf;
}

function get_tf(i,collection_b,collection_a,tf){
  for(var j = i; j<collection_b.length;j++)
  {
    if(collection_a[i] === collection_b[j])
    {
      tf = true;
    }
    else
    {
      tf = false;
    }
  }
  return tf;
}

//module.exports = compare_collections;


