function out()
{
    a=new Array(100).fill("hello");
    return  ()=>{
        console.log(a);
    }

}
let value=out();
value();