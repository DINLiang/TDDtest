'use strict';
var number_map_to_word = function(collection){
  var array = [];
  var newArray = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
for( var i = 0;i < collection.length;i++){
  array.push(newArray[collection[i] - 1]);
}
return array;
};

//module.exports = number_map_to_word;
