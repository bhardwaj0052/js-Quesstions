Array.prototype.myFlatMap = function (callback, thisArg) {
  return this.map((value, index, array) => {
    return callback.call(thisArg, value, index, array);
  }).reduce((acc, current) => {
    return acc.concat(current);
  }, []);
};

console.log([1, 2, 3].myFlatMap((x) => [x, [x * 2]]));
// [1, [2], 2, [4], 3, [6]]
