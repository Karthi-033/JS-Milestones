for(let i=0;i<10;i++)
    {
        console.log(i);
        if(i==5)
        {
            continue;
        }
    
    }
    console.log("do while");
    
    let i=0;
    do{
         
        console.log(i);
        i++;
    }while(i!=5)
    
    console.log("while");
     let a=0;
        while(true)
        {
         a++;
         console.log(a);
         if(a==7)
         {
            break;
         }
        }


  console.log("for in loop");      
  let person=[2,3,4,7,5,6];
  for(i in person)
  {
    console.log(person[i]);
  }