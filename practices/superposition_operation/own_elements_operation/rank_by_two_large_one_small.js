'use strict';
function rank_by_two_large_one_small(collection){
  //这里写代码。。。
  var array = [];
  collection.sort(function(a,b){return a>b?1:-1});
  for(var i=0;i<collection.length;i++)
  {
     if(i%3 === 0 )
     {
       array = get_more_array(collection,i,array);
     }
  }
  return array;
}

function get_more_array(collection,i,array){
  array = get_add_two_array(collection,i,array);
  array = get_add_one_array(collection,i,array);
  array = get_add_no_array(array,collection,i);
  return array;
}

function get_add_two_array(collection,i,array){
  if(collection[i+2] == undefined)
  {
    array.push(collection[i]);
    array.push(collection[i+1]);
  }
  return array;
}

function get_add_one_array(collection,i,array){
  if(collection[i+1] == undefined)
  {
    array.push(collection[i]);
  }
  return array;
}

function get_add_no_array(array,collection,i){
 if(collection[i+2] != undefined && collection[i+1] != undefined)
 {
   array.push(collection[i + 1]);
   array.push(collection[i + 2]);
   array.push(collection[i]);
 }
  return array;
}
//module.exports = rank_by_two_large_one_small;
