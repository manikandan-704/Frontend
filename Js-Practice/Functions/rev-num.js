let rev = 0;
function revNum(num) {
  while (num > 0) {
    rev = rev * 10 + (num % 10); //decimal value
    num = Math.floor(num / 10); //round the num
  }
  return rev;
}
let reversedNumber = revNum(1234);
console.log(reversedNumber);
