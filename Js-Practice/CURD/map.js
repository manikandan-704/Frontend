//create new array

let arr = [1, 2, 3, 4, 5];
let newarr = arr.map((num) => {      
    return num * 2
})
console.log(arr);
console.log(newarr);

//update array

let arr1=[
    {id:1,name:"mani"},
    {id:2,name:"ragul"}
]
let newarr1=arr1.map(arr1=>{
    if (arr1.id===2) {
       return {...arr1,name:"kumar"}     
    } 
    return arr1
})
console.log(arr1);
console.log(newarr1);

//Read using map(0)

let read=[{name:"mani",age:21},
    {name:"isac",age:20}
]
let find=read.map(user=>{
    return [user.name,user.age]
})
console.log(find);




