const double = async x => x * 2;
const addTen = async x => x + 10;
const square = async x => x * x;

function pipeAsync(...fns) {
  return async function (value) {
    return fns.reduce(
      (promise, fn) => promise.then(fn),
      Promise.resolve(value)
    );
  };
}

pipeAsync(double, addTen, square)(3).then(console.log);
// 256