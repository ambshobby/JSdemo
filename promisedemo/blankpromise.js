const recall=(resolve,reject)=>
{
    if(1)
    {
        resolve();
    }
    else
    {
        reject();
    }
}
let ambs=new Promise(recall);
console.log(ambs);

