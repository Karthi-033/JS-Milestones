function add(a,b)
{
    return new Promise((resolve)=>{
        let c=a+b;
        resolve(c);
    });
}

add(2,3).then((e)=>{
    console.log(e);
})