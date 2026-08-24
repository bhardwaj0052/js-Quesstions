const double = async x => x * 2;
const addTen = async x => x + 10;
const square = async x => x * x;
function pipeAsync(...fns) {
 // TODO: return an async function that threads the value
 // through fns left-to-right using reduce
}
pipeAsync(double, addTen, square)(3).then(console.log);
// (3*2=6, +10=16, ^2=256) -> 256
