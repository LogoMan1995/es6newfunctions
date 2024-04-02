// 26. Заставьте обещание справляться с успехом и неудачей. Если responseFromServer есть true, вызовите resolve метод для успешного выполнения обещания. Передайте resolve строку со значением We got the data. Если responseFromServer есть false, используйте reject вместо этого метод и передайте ему строку: Data not received.


const makeServerRequest = new Promise((resolve, reject) => {
    
    let responseFromServer;
  
    if(responseFromServer) {
      resolve("We got the data");
    } else {	
      reject("Data not received");
    }
  });