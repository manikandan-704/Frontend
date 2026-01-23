async function check(num) {
        if(num>0){
              return "positive"
        }
        else{
            throw "negative" 
        }
}
check(-5)
.then(result=> console.log(result))
.catch(error =>console.log(error));
