function isPalindrom(a){
    let change=a.split("").reverse().join("");  //split()=> ["s","t","r"] and join()=> join the split() reverse()=>["r","t","s"]
    return change===a ? "Palindrom" : "not Palindrom"
}
console.log(isPalindrom("madam"));

//without using reverse()

function isPalin(str) {
    let left = 0;
    let right = str.length - 1;

    while (left < right) {
        if (str[left] !== str[right]) 
        return false;
        left++;
        right--;
    }
    return true;
}
let str=isPalin("mani");
console.log(str)


