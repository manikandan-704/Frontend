function one(){
    return new Promise(resolve=>{
        setTimeout(()=>resolve("Hello"),1000)
    })
}
function two(){
    return new Promise(resolve=>{
        setTimeout(()=>resolve("Everyone"),2000)
    })
}
async function parelle() {
    let result=await Promise.all([one(),two()])    //calling all promises in array
    console.log(result);
}
parelle();