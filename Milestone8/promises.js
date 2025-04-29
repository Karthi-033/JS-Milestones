function voting(age)
{
    return new Promise((resolve,reject)=>{
        if(age>18)
        {
            resolve("you can vote");
        }
        else{
            reject("you can't vote");
        }
    })
}

voting(12).then((e)=>{
    console.log(e);
}).catch((e)=>{
console.log(e);
})