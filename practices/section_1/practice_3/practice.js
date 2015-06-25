function collection_same_elements(collection_a, object_b) {
  //在这里写入代码

  var collection_b = object_b.value;
  var array = [];
  for(var i = 0;i < collection_a.length;i++)
  {
    array = get_array(collection_b,collection_a,array,i);
  }
  return array;
}

//module.exports = collect_same_elements;
