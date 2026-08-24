Array.prototype.myMap = function (callback, thisArg) {
  const len = this.length;
  const result = [];
  for (let i = 0; i < len; i++) {
    if (i in this) {
      result[i] = callback.call(thisArg, this[i], i, this);
    }
  }

  return result;
};

const arr = [1, , 3];
const newArr = arr.myMap((e) => {
  return e * 2;
});
console.log(newArr);
