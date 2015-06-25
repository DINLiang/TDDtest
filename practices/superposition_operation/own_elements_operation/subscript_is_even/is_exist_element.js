'use strict';
var is_exist_element = function(collection,element){
  var array = get_new_array(collection);
  var result = get_result(array);
  return result;
};

function get_new_array(collection){
  var array = [];
  for(var i = 0;i < collection.length;i++)
  {
    if(i % 2 === 0)
    {
      array.push(collection[i]);
    }
  }
  return array;
}

function get_result(array){
  var result = false;
  for(var j = 0;j<array.length;j++)
  {
    if(array[j] === 4 || array[j] === 3)
    {
      result = true;
    }
  }
  return result;
}
//module.exports = is_exist_element;
