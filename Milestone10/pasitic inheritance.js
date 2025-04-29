function create(cmd)
{
    const obj=Object.create(cmd);

    obj.displ=function(){
        console.log("this is wraped");
    }
    return obj;
}
const value={
    name:"karthi"
}
const obj=create(value);
obj.displ();