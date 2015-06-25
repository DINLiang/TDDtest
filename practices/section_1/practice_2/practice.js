function collect_same_elements(collection_a, collection_b) {
  //在这里写入代码
  var array = [];
  for(var j = 0;j < collection_a.length;j++)
  {
    array = get_array_first(collection_b,collection_a,j,array);
  }
  return array;
}

function get_array_first(collection_b,collection_a,j,array){
  for(var i = 0;i < collection_b.length;i++)
  {
    var new_array = collection_b[i];
    if (new_array instanceof Array == true)
    {
      array = get_array_last(collection_b,i,collection_a,j,array);
    }
  }
  return array;
}

function get_array_last(collection_b,i,collection_a,j,array){
  for (var k = 0; k < collection_b[i].length; k++)
  {
    if (collection_a[j] === collection_b[i][k])
    {
      array.push(collection_a[j]);
    }
  }
  return array;
}

//module.exports = collect_same_elements;
