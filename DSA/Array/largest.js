let arr = [1, 2, 3, 8, 5, 6];
let max = arr[0];
for (let i of arr) {  // loop through the arr 
  if (i > max){
   max=i;
  }
}
console.log(`Largest number in the array: ${max}`);
