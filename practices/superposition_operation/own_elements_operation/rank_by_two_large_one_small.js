'use strict';
function rank_by_two_large_one_small(collection){
  //这里写代码。。。

  //var collection_a = [2,8,1,9,6,4,3,10];
  //
  //it('两大一小排序',function(){
  //  expect(result).toEqual([2,3,1,6,8,4,9,10])
  var array = [];
  collection.sort(function(a,b){return a>b?1:-1});
  for(var i=0;i<collection.length;i++){
     if(i%3 === 0 ) {
       if(collection[i+2] == undefined ){
         array.push(collection[i]);
         array.push(collection[i+1]);
       }
       else if(collection[i+1] == undefined && collection[i+1] == undefined){
         array.push(collection[i]);
       }
       else{
         array.push(collection[i + 1]);
         array.push(collection[i + 2]);
         array.push(collection[i]);
       }
     }
  }
  return array;
}
//module.exports = rank_by_two_large_one_small;
