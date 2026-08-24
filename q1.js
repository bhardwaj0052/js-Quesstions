// const arr = [123,45,6];
// const number=arr.map((i)=>{
//         let a = String(i).split("");
//         let c= a.reduce((acc,cur)=>acc+=Number(cur),0);
//         return c
// })
// console.log(number);

function digitSums(nums) {
   const number=nums.map((i)=>{
        let a = String(i).split("");
        return a.reduce((acc,cur)=>acc+=Number(cur),0)})
    return number
}
console.log(digitSums([123,45,6]));