function fact(value)
{
    if(value==0)
    {
        return 1;
    }
    return value*fact(value-1);
}
console.log(fact(5));