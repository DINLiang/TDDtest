function collect_sames_elements(collection_a, collection_b) {
  //在这里写入代码
  var array = [];
  for(var i = 0;i < collection_a.length;i++)
  {
    array = get_array(collection_b,collection_a,array,i);
  }
  return array;
}

function get_array(collection_b,collection_a,array,i){
  for(var j = 0;j < collection_b.length;j++)
  {
    if(collection_a[i] === collection_b[j])
    {
      array.push(collection_a[i]);
    }
  }
  return array;
}

//module.exports = collect_same_elements;
