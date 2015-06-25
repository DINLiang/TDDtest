function create_updated_collection(collection_a, object_b) {
  //在这里写入代码

  var array = object_b.value;
  for(var i=0;i<array.length;i++)
  {
    collection_a = get_collection_a(array,i,collection_a);
  }
  return collection_a;
}

function get_collection_a(array,i,collection_a){
  var temp = array[i];
  for(var j=0;j<collection_a.length;j++)
  {
    if(collection_a[j].key == temp)
    {
      collection_a[j].count --;
    }
  }
  return collection_a;
}

//module.exports = create_updated_collection;
