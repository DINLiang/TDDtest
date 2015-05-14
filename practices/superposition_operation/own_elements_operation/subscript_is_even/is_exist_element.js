'use strict';
var is_exist_element = function(collection,element){

  //var collection_a = [1,2,3,4,5,6];
  //
  //it('下标为偶数的元素中，存在4',function(){
  //  var result = is_exist_element(collection_a,4);
  //  expect(result).toEqual(true);
  //});
  //
  //it('下标为偶数的元素中，不存在3',function(){
  //  var result = is_exist_element(collection_a,3);
  //  expect(result).toEqual(false);
   var array = [];
   for(var i = 0;i < collection.length;i++){
     if(i % 2 === 0){
       array.push(collection[i]);
     }
   }
  for(var j = 0;j<array.length;j++){
    if(array[j] === 4){
     var result = true;
    }
    else if(array[j] === 3) {
      result = true;
    }
    else{
        result = false;
      }
  }
return result;
};
//module.exports = is_exist_element;
