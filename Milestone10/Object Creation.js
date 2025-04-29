function person(name,dept,age)
{
    this.name=name;
    this.dept=dept;
    this.age=age;
}
const value=new person("karthi","csd",21);
console.log(value.name);


const a={};
const obj=Object.create(a);
obj.name="karthi";
obj.age=21;
console.log(obj);