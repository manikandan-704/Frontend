/* function removeDup(arr){
   let removedArr=[];
   for(let i in arr){
    if(!removedArr.includes(i)){
        return removedArr.push(i)
    }
   }
   return removedArr;
} */
function removeDuplicates(arr) {
    let result = [];

    for (let i of arr) {
        if (!result.includes(i)) {
            result.push(i);
        }
    }

    return result;
}

console.log(removeDup([1,2,3,1,3,4]));
