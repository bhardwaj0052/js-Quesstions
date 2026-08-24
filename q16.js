// function findFirstNegative(nums) {
//  try {
//  nums.forEach(n => {
//  if (n < 0) {
//  console.log('Found:', n);
//  throw new Error('STOP');
//  }
//  });
//  } catch (e) {
//  // swallow
//  }
// }
// TODO: list the problems, then rewrite without forEac
// code will work but if there is really some error than this function can not tell what was the actual reason behind that;

function findFirstNegative(nums) {
 const result = nums.find((i)=> i<0)
 if (result !== undefined) {
    console.log('Found:', result);
  }
}
findFirstNegative([3, 7, 2, -5, 9]);