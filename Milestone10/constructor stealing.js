function main()
{
    this.number=[10,20];
    
}
function steal()
{
    main.call(this);
}
const s1=new steal();
const s2=new steal();
console.log(s1);
s2.number.push(30);
console.log(s2);