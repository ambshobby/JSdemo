async function f1()
{
    var x= await f1sub()
    console.log(x)
}
console.log("i am 1");
console.log("i am 2");
for(var i=0;i<5;i++)
{
    console.log("in for 1 with i as"+i)
}
f1()
for(var i=0;i<5;i++)
{
    console.log("in for 2 with i as"+i)
}
console.log("i am done last may be ")

function f1sub()
{
    for(var i=0;i<50;i++)
    {
    console.log("in for of f1sub with i as"+i)
    }   
    return (resolve => { setTimeout(() => {resolve('resolved');}, 20000);});  
}

// function f1subexecutor()
// {
     
// }