function resolveAfter2Seconds() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('resolved');
      }, 2);
    });
  }
  
  async function asynccall() {
    console.log('calling');
    const result = await resolveAfter2Seconds();
    console.log(result);
    // Expected output: "resolved"
  }
  
  asynccall();
  console.log("timepass");
  console.log("timepass");
  console.log("timepass");
  console.log("timepass");

  console.log("timepass");

  // console.log("timepass");
  // console.log("timepass");
  // console.log("timepass");
  // console.log("timepass");
  // console.log("timepass");
  // console.log("timepass");
  // console.log("timepass");

  // console.log("timepass");
  // console.log("timepass");
  // console.log("timepass");
  // console.log("timepass");
  // console.log("timepass");
  // console.log("timepass");
  // console.log("timepass");

  // console.log("timepass");
  // console.log("timepass");
  // console.log("timepass");
  // console.log("timepass");
  // console.log("timepass");
  // console.log("timepass");
  // console.log("timepass");
  // console.log("timepass");
  // console.log("timepass");
  // console.log("timepass");

  // console.log("timepass");
  // console.log("timepass");
  // console.log("timepass");
  // console.log("timepass");
  // console.log("timepass");
  // console.log("timepass");
  // console.log("timepass");

  // console.log("timepass");
  // console.log("timepass");
  // console.log("timepass");
  // console.log("timepass");
  // console.log("timepass");
  // console.log("timepass");
  // console.log("timepass");

  // console.log("timepass");
  // console.log("timepass");
  // console.log("timepass");
  // console.log("timepass");
  // console.log("timepass");
  // console.log("timepass");
  // console.log("timepass");

  // console.log("timepass");
  // console.log("timepass");
  // console.log("timepass");
  // console.log("timepass");
  // console.log("timepass");
  // console.log("timepass");
  // console.log("timepass");

  // console.log("timepass");
  // console.log("timepass");
  // console.log("timepass");
// for(var i=1;i<10000;i++)
// {
//     console.log("for timepass");
// }