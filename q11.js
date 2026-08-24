const ranges = [{ start: 1, end: 3 }, { start: 2, end: 5 }, { start: 8, end: 9 }];
function expandRanges(ranges) {
 const num=ranges.flatMap(({start,end})=>{
    const arr=[];
    for(let i =start; i<=end;i++){
        arr.push(i);
    }
    return arr;
 })
 const result=num.reduce((acc,cur)=>{
    if(!acc.includes(cur)){
        acc.push(cur);
    }
    return acc
 },[])
 return result
}
console.log(expandRanges(ranges)); // [1,2,3,4,5,8,9]
