'use strict';
function uniq_number(collection){
  var array = [];
  var length = collection.length;
  for(var i = 0;i < length; i++){
    for(var j = i+1; j < length; j++){
      if(collection[i] === collection[j] ){
        j = ++i;
      }
    }
    array.push(collection[i]);
  }
  return array;
}


function two_translate_one_array(collection){
  var array  = [];
  for(var i = 0;i< collection.length;i++){
    var new_array = collection[i];
    if( new_array instanceof Array == true ){
      for(var j = 0;j< new_array.length;j++){
        array.push(new_array[j]);
      }
    }
    else{
      array.push(new_array);
    }
  }
  return array;
}

function for_condition_to_again(object_b,collection_a){
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

function Statistics_count(collection){
  var result = [];
  var array = uniq_number(collection);
  for(var i=0;i<array.length;i++){
    var number = 0;
    var temp = array[i];
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
}

function for_condition_Statistics_count(collection){
  var result = [];
  var array = uniq_number(collection);
  for(var i=0;i<array.length;i++){
    var number = 0;
    var temp = array[i];
    var position = temp.indexOf('-');
    if(position != -1 ){
      number = parseFloat(temp.substr(position + 1));
      temp = temp.substr(0,position);
    }
    else {
      temp = object_count(collection,temp,number).string;
      number = object_count(collection,temp,number).number;
    }
    var k = {key: temp, count: number};
    result.push(k);
    number = 0;
  }
  return result;
}

function object_count(collection,temp,number){
  for(var j = 0; j < collection.length; j++){
    if (collection[j] == temp) {
        number++;
    }
  }
  return {string:temp,number:number};
}

function for_condition_to_letter(collection,i,new_array,array){
    var ten = parseInt(collection[i] / 26);
    var one = collection[i] - ten * 26;
    if (collection[i] % 26 == 0) {
      var left = new_array[ten - 2];
      var right = new_array [new_array.length - -(one - 1)];
    }
    else {
      left = new_array[ten - 1];
      right = new_array [one - 1];
    }
    var  lr = left + right;
    array.push(lr);
    return array;
}
