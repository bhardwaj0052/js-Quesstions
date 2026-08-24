function cartesianProduct(...arrays) {
 const cp=arrays.reduce((acc,cur)=>acc.flatmap(c))
}
console.log(cartesianProduct([1, 2], ["a", "b"], [true, false]));
// 8 triples: [1,'a',true], [1,'a',false], ...
