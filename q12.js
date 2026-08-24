Array.prototype.myFlatMap = function(callback, thisArg) {
    const a= callback.map((item)=>
        if(Array.isArray(item)){

        }
        return item;
    );
};
console.log([1, 2, 3].myFlatMap(x => [x, [x * 2]]));