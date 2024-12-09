function iammain()
{
    console.log("I will call helper ");
  // call helper 
  let a=iamhelper();
  console.log(a)

}

function iamhelper()
{
    return("i am helping you iam helper ");
}

iammain()