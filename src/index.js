
exports.min = function min (array) {
  if (!Array.isArray(array) || !array.length) {
    return 0;
  }
  array.sort((a, b) => a - b) 
  return array[0];
  }

exports.max = function max (array) {
  if (!Array.isArray(array) || !array.length) {
    return 0;
  }
  array.sort((a, b) => a - b) 
  return array[array.length-1];
}

exports.avg = function avg (array) {
  if (!Array.isArray(array) || !array.length) {
    return 0;
  }
  var sum = 0;
  var count = array.length;
  for (i=0; i<count; i++) {
    sum += array[i];
  }
  return sum/count;
}
