// while loop & Math.floor()

const countDigits = (num) => {
  let count = 0;
  while (num > 0) {
    count++;
    num = Math.floor(num / 10); //remove the point value
  }
  return count;
};
console.log(countDigits(1234));

//recursion

function countDigit(num) {
  if (num === 0) return 0;
  return 1 + countDigit(Math.floor(num / 10)); // countDigits(12345) → 1 + countDigits(1234)=> 1234
}
console.log(countDigit(12345));
