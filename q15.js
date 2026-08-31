Array.prototype.myForEach = function (callback, thisArg) {
  const l = this.length;
  for (let i = 0; i < l; i++) {
    if (i in this) {
      callback.call(thisArg, this[i], i, this);
    }
  }
};
const a = [1, 2, 3];
a.myForEach((val, i) => {
  console.log(i, val);
  if (i === 0) {
    a.push(99);
  }
});