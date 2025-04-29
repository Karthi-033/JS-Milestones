function display(value,callback)
{
    console.log(value);
    callback();
}
display(200,()=>{
    console.log("success status");
});