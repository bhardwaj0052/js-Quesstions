const matrix = [
 [1, 2, 3],
 [4, 5, 6],
];
function transpose(matrix) {
 const tans=matrix[0].map((n,i)=>{
    return matrix.map((n)=>n[i])
 })
 return tans
}

console.log(transpose(matrix));
// [[1,4],[2,5],[3,6]]