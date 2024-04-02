// 1. Это упражнение предназначено для иллюстрации разницы между тем, как var и let ключевые слова назначают область действия объявленной переменной. 



function checkScope() {
    "use strict";
    let i = "function scope";
    if (true) {
      let i = "block scope";
      console.log("Block scope i is: ", i);
    }
    console.log("Function scope i is: ", i);
    return i;
  }