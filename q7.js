const nested = [1, [2, [3, 4, [5, 6]], 7], 8];
function deepFlatten(arr) {
    const newarr = arr.reduce((acc,cur)=>{
        if(Array.isArray(cur)){
            acc.push(...deepFlatten(cur));
        }else{
            acc.push(cur);
        }
        return acc
    },[]
)
return newarr
}
console.log(deepFlatten(nested)); // [1,2,3,4,5,6,7,8]