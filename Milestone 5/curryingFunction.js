function add(a)
{
    return function(b)
    {
        return a+b;
    }
}

const value=add(5);
console.log(value(2));