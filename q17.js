// This function is supposed to return a NEW array of doubled values using forEach, but it's broken. Explain
// precisely why forEach can never be used to correctly implement this (in terms of its return type contract), then
// provide a corrected version that still uses forEach internally (mutating an external array) plus a second version
// using the correct built-in method instead.
function doubleAll(nums) {
 return nums.forEach(n => n * 2);
}
console.log(doubleAll([1, 2, 3])); // BUG: what actually gets logged, and why?
// Foreach do operation inside it loops but did not store it and return it. if i still says it to return something it did not return anything i have to store the data in variable that is outside the foreach loop like i push the element into array.
