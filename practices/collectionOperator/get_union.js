'use strict';

function get_union(collection_a, collection_b) {
  //在这里写入代码
  for (var i = 0, j = 0, ci, r = {}, c = []; ci = collection_a[i++] || collection_b[j++]; ){
    if(r[ci]) continue;
      r[ci] = 1;
      c.push(ci);
    }
    return c;
}
//module.exports = get_union;
