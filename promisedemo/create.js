const inventory = {
    sunglasses: -1,
    pants: 1088,
    bags: 1344
  };
  
  // Write your code below:
  const myExecutor = (resolve, reject) => {
      if (inventory.sunglasses > 0) {
        
          resolve('Sunglasses order processed.');


      } else {
          reject('That item is sold out.');
      }
  };
  
  const orderSunglasses = () => {
      return new Promise(myExecutor);
  };
  
  const orderPromise = orderSunglasses();
  
  console.log(orderPromise);   
  orderPromise.then(callsucess());
   
  function callsucess()
  {
    console.log("i am called after order fullfilled ");
  }