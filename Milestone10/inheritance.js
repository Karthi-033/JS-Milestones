class name
{
    fullname()
    {
        console.log("karthi");
    }
}
class age extends name
{
    ages()
    {
        console.log(21);
    }
}
class details extends  age
{
    display()
    {
        console.log("this are the details");
        }
}
const det=new details();
det.fullname();
det.ages();
det.display()