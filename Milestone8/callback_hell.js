function name(callback)
{
    console.log("1st call back");
    callback();
}
function firstname(callback)
{
    console.log("2nd call back");
    callback();
}
function lastname(callback)
{
    console.log("final one");
    callback();
}

name(()=>{
    firstname(()=>{
        lastname(()=>{
            console.log("completed");
        })
    })
})