function collections_same_elements(collection_a, object_b) {
  //在这里写入代码

  var collection_b = object_b.value;
  var array = [];
  for(var i = 0;i < collection_a.length;i++)
  {
    array = get_arrays(collection_b,collection_a,i,array);
  }
  return array;
}

function get_arrays(collection_b,collection_a,i,array){
  for(var j = 0;j < collection_b.length;j++)
  {
    if(collection_a[i].key === collection_b[j])
    {
      array.push(collection_a[i].key);
    }
  }
  return array;
}

//module.exports = collect_same_elements;
