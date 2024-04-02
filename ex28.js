// 28. Добавьте catch метод в свое обещание. Используйте error в качестве параметра его функцию обратного вызова и войдите error в консоль.

const makeServerRequest = new Promise((resolve, reject) => {
    
    let responseFromServer = false;
      
    if(responseFromServer) {
      resolve("We got the data");
    } else {	
      reject("Data not received");
    }
  });
  
  makeServerRequest.then(result => {
    console.log(result);
  });
  
  makeServerRequest.catch(error => {
    console.log(error);
  });

