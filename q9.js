function myFlat(arr, depth) {
  return arr.reduce((result, item) => {
    if (Array.isArray(item) && depth > 0) {
      result.push(...myFlat(item, depth - 1));
    } else {
      result.push(item);
    }
    return result;
  }, []);
}
console.log(myFlat([1, [2, [3, [4]]]], 1)); // [1, 2, [3, [4]]]
console.log(myFlat([1, [2, [3, [4]]]], 2)); // [1, 2, 3, [4]]
console.log(myFlat([1, [2, [3, [4]]]], Infinity)); // [1, 2, 3, 4]