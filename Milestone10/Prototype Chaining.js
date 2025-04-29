const parent1={
    name:"akash",
    age:30,
    print:function(){
        console.log(this.name+" "+this.age);
    }
}
const parent2=Object.create(parent1);
parent2.age2= function (){
    console.log("parent2");
}
const child=Object.create(parent2);
child.age3=function()
{
    console.log("child")
};
console.log(child.age);
