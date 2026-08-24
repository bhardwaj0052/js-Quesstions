Array.prototype.myMap = function(callback, thisArg) {
 for(const item of  thisArg){
    callback(item)
 }
};
const sparse = [1, , 3]; // hole at index 1
console.log(sparse.myMap(x => x * 2)); // [2, <1 empty item>, 6]
