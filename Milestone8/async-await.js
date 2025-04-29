function loop()
{
    for(let i=0;i<10;i++)
    {
        console.log(i);
    }
    
}

const display = async ()=>{
    console.log("start execution");
    await loop();
    console.log("executed");
}
display();