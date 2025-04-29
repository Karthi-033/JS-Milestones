function person(name,age)
{
    const obj={};
    obj.name=name;
    obj.age=age;
    obj.print=function(){
        console.log(name+" "+age);
    }
    return obj;
}
const p1=person("karthi",21);

p1.print();
console.log(p1.name);
