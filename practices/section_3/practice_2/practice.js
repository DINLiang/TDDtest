function create_updated_collections(collection_a, object_b) {
  //在这里写入代码
  var array = object_b.value;
  for(var i=0;i<array.length;i++){
    var temp = array[i];
    for(var j=0;j<collection_a.length;j++){
      if(collection_a[j].key == temp){
        if(collection_a[j].count >= 3){
          collection_a[j].count = collection_a[j].count - Math.floor(collection_a[j].count / 3);
        }
      }
    }
  }
  return collection_a;
}

//module.exports = create_updated_collection;
