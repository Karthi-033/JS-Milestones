function count ()
{
    let inc=0;
    return function incount()
    {
       console.log(inc++);
    }
}

const value=count();
value();
value();
value();