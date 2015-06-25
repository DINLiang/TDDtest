'use strict';
var number_map_to_word_over_26 = function(collection){

  var new_array = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  var array = [];
for(var i = 0; i < collection.length;i++)
{
  if (collection[i] > 26)
  {
  array = for_condition_to_letter(collection, i, new_array, array);
   }
  else
   {
    array.push(new_array[collection[i] - 1]);
   }
}
return array;
};


//module.exports = number_map_to_word_over_26;
