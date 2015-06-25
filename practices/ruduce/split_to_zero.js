'use strict';

function split_to_zero(number) {
  //在这里写入代码
  var num = Math.random() * 10;
  console.log(num);
  var array = [];
  //var num = 1;
  for(var i= 0,len = parseInt(num/number + 1);i<len;i++)
  {
    num = (num - 0.3).toFixed(1);
    if(num == 0.0)
    {
      num = 0;
    }
    array.push(num);
    if(num <= 0)
    {
      break;
    }
  }
  console.log(array);
  return array;
}

//module.exports = collect_max_number;
