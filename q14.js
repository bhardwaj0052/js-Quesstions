const arr = ['a', 'b', 'c'];
arr.forEach(function (item, index) {
 setTimeout(function () {
 console.log(index, item);
 }, 1000);
});
