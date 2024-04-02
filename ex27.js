// 27. Добавьте then метод в свое обещание. Используйте result в качестве параметра его функцию обратного вызова и войдите result в консоль.

const makeServerRequest = new Promise((resolve, reject) => {
    
    let responseFromServer = true;
      
    if(responseFromServer) {
      resolve("We got the data");
    } else {	
      reject("Data not received");
    }
  });
  
  makeServerRequest.then(result => {
    console.log(result);
  });

