console.log("i am 1")
console.log("i am 2 ")
async function f1()
{
    var x= await f1sub();
    console.log(x)
}

function f1sub()
{ 
   for(i=0;i<5;i++)
     {
         console.log(i)
    }
return new Promise(resolve => { setTimeout(() => {resolve('resolved');}, 2);});

}

f1();
for(var i=0;i<25;i++)
{
    console.log("summne hange"+i);
}
console.log(" i am the last")



