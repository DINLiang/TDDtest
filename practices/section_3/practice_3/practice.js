function created_updated_collection(collection_a, object_b) {
  //在这里写入代码

  var result = [];
  var new_array = [];
  var length = collection_a.length;
  for(var i = 0;i < length; i++){
    for(var j = i+1; j < length; j++){
      if(collection_a[i] === collection_a[j] ){
        j = ++i;
      }
    }
    new_array.push(collection_a[i]);
  }
  for(var i=0;i<new_array.length;i++){
    var number = 0;
    var temp = new_array[i];
    for(var j =0;j<collection_a.length;j++){
      if (collection_a[j] == temp){
        number ++;
      }
    }
    var k = {key: temp, count: number};
    result.push(k);
    number = 0;
  }

  var array = object_b.value;
  for(var i=0;i<array.length;i++){
    var temp = array[i];
    for(var j=0;j<result.length;j++){
      if(result[j].key == temp){
        if(result[j].count >= 3){
          result[j].count = result[j].count - Math.floor(result[j].count / 3);
        }
      }
    }
  }
  return result;

}

//module.exports = create_updated_collection;
