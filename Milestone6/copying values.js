const dept="csd";
let  newdept=dept;
console.log(newdept);//value copied

//object copy
const details={
    firstname:"karthi",
    age:21,
    place:"salem"
}
let person=Object.assign({},details);

console.log(person);