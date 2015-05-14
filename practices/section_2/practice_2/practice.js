function count_same_elements_2(collection) {
  //在这里写入代码

  var result = [];
  var new_array = [];
  var length = collection.length;
  for(var i = 0;i < length; i++){
    for(var j = i+1; j < length; j++){
      if(collection[i] === collection[j]){
        j = ++i;
      }
    }
    new_array.push(collection[i]);
  }
  for(var i=0;i<new_array.length;i++){
    var number = 0;
    var temp = new_array[i];
    var position = temp.indexOf('-');
    //var positions = temp.indexOf(':');
    if(position != -1 ){
      number = parseFloat(temp.substr(position + 1));
      temp = temp.substr(0,position);
    }
    //else if(positions != -1){
    //  number = parseFloat(temp.substr(position + 1));
    //  temp = temp.substr(0,position);
    //}
    else {
      for (var j = 0; j < collection.length; j++) {
        if (collection[j] == temp) {
          number++;
        }
      }
    }
    var k = {key: temp, count: number};
    result.push(k);
    number = 0;
  }
  return result;
}

//module.exports = count_same_elements;
