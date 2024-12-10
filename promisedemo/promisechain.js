new Promise(function(resolve, reject) 
{

    setTimeout(() => resolve(6), 1);
  
}).then(function(result) {  
                            console.log(result); // 1
                            return result * 2;
  
                        }).then(function(result) {  
                                                    console.log(result); // 2
                                                    return result * 3;
  
                                                }).then(function(result) 
                                                
                                                
                                                
                                                {

                                                                            console.log(result); // 6
                                                                            return result * 4;
  
                                                                        }        );