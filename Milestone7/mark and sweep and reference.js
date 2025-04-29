class  gcalg{
    constructor(){
     this.obj=[];
    }
     create(name){
        let newobj={name:name,refcount:1};
        this.obj.push(newobj);
        return this.obj;
    }
     mark()
        {
            this.obj.forEach(obj=>{
            if(this.obj[0].refcount==1)
            {
                this.obj[0].mark=true;
            }});
           
        }
         sweep()
        {
            this.obj=this.obj.filter(o=>o.mark);
           
            return this.obj;
        }
        
     garbagecollector()
    {
        this.mark();
        this.sweep();
        console.log(this.obj);
    }
    
}
const gc=new gcalg();
const ob1=gc.create("obj1");
const ob2=gc.create("obj2");
const ob3=gc.create("obj3");
ob3[2].refcount=0;
gc.garbagecollector();