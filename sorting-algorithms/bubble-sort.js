'use strict';
module.exports = function(arr) {
  let isSorted = false;

  while (!isSorted) {
    let outofOrder = false;
    for (let i = 0; i < arr.length; i++) {
      let first = arr[i];
      let second = arr[i + 1];
      if (second < first) {
        arr[i] = second;
        arr[i + 1] = first;
        outofOrder = true;
      }
    }
    if (outofOrder === false) {
      isSorted = true;
    }
  }
  return arr;
};
