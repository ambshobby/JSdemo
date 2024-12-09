const button = this.document.getElementById("btn");
let min=this.document.getElementById("min");
let max = this.document.getElementById("max");
button.addEventListener('click',myFunction);


function myFunction()
{
    let Arr=[];
    let min1=min.value;
    let max1=max.value;
    for(let i=1;i<=5;i++)
    {
        let num=random(min1,max1);
        console.log(num);
       Arr.push(num);
    }
   for(let i=1;i<=5;i++)
   {
    document.getElementById("p1").innerText=screen
   }
}

function random(min1,max1)
{
    return(Math.floor(Math.random() * (max1 - min1 + 1)) + min1);
}

