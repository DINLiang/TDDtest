function count_same_elements_3(collection) {
  //在这里写入代码
  var result = [];
  var array = uniq_number(collection);
  for (var i = 0; i < array.length; i++) {
    var temp = get_temp_and_number(array,i,collection).string;
    var number = get_temp_and_number(array,i,collection).number;
    var k = {name: temp, summary: number};
    if (result.length == 0) {
      result.push(k);
    }
    else {
      result = for_conditions(result, k);
    }
    number = 0;
  }
  return result;
}

function get_temp_and_number(array,i,collection){
  var number = 0;
  var temp = array[i];
  var position = temp.indexOf('-');
  var position_colon = temp.indexOf(':');
  var position_square_brackets = temp.indexOf('[');
  number = condition_dash(temp,number,position,position_colon,position_square_brackets,collection).number;
  temp = condition_dash(temp,number,position,position_colon,position_square_brackets,collection).string;
  return {string:temp,number:number};
}

function for_conditions(result,k){
  for (var n = 0, len = result.length; n < len; n++)
  {
    if (k.name == result[n].name)
    {
      result[n].summary += k.summary;
    }
    else if(n == len -1)
    {
      result.push(k);
    }
  }
  return result;
}

function condition_dash(temp,number,position,position_colon,position_square_brackets,collection){
  if(position != -1)
  {
    number = parseFloat(temp.substr(position + 1));
    temp = temp.substr(0, position);
  }
  else
  {
    number = condition_colon(temp,number,position_colon,position_square_brackets,collection).number;
    temp = condition_colon(temp,number,position_colon,position_square_brackets,collection).string;
  }
  return {string:temp,number:number};
}

function condition_colon(temp,number,position_colon,position_square_brackets,collection){
  if(position_colon != -1)
  {
    number = parseFloat(temp.substr(position_colon + 1));
    temp = temp.substr(0, position_colon);
  }
else
  {
    number =  condition_square_brackets(temp,number,position_square_brackets,collection).number;
    temp =  condition_square_brackets(temp,number,position_square_brackets,collection).string;
  }
  return {string:temp,number:number};
}

function condition_square_brackets(temp,number,position_square_brackets,collection){
  if(position_square_brackets != -1)
  {
    number = parseFloat(temp.substr(position_square_brackets + 1));
    temp = temp.substr(0, position_square_brackets);
  }
  else
  {
    number = condition_no(temp,number,collection).number;
    temp = condition_no(temp,number,collection).string;
  }
  return {string:temp,number:number};
}

function condition_no(temp,number,collection){
  temp = object_count(collection, temp, number).string;
  number = object_count(collection, temp, number).number;
  return {string:temp,number:number};
}

//module.exports = count_same_elements;
