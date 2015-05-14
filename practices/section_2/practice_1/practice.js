function count_same_elements(collection) {
  //在这里写入代码
  var result = [];
  var new_array = [];
  var length = collection.length;
  for(var i = 0;i < length; i++){
    for(var j = i+1; j < length; j++){
      if(collection[i] === collection[j] ){
        j = ++i;
      }
    }
    new_array.push(collection[i]);
  }
  for(var i=0;i<new_array.length;i++){
    var number = 0;
    var temp = new_array[i];
    for(var j =0;j<collection.length;j++){
      if (collection[j] == temp){
        number ++;
      }
    }
    var k = {key: temp, count: number};
    result.push(k);
    number = 0;
  }
  return result;

  //var result = [];
  //var array = [2,1,1,1,3,3];
  //var new_array = [];
  //var length = array.length;
  //for(var i = 0;i < length; i++){
  //  for(var j = i+1; j < length; j++){
  //    if(array[i] === array[j] ){
  //      j = ++i;
  //    }
  //  }
  //  new_array.push(array[i]);
  //}
  //console.log(new_array);
  //for(var i=0;i<new_array.length;i++){
  //  var number = 0;
  //  var temp = new_array[i];
  //  for(var j =0;j<array.length;j++){
  //    if (array[j] == temp){
  //      number ++;
  //    }
  //  }
  //  var k = {key: temp, count: number};
  //  console.log(k);
  //  result.push(k);
  //  number = 0;
  //}
  //console.log(result[0]);
  //console.log(result[1]);
  //console.log(result[2]);
  //console.log(result);
}

//module.exports = count_same_elements;
