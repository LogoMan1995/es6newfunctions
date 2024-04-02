// 7. Измените функцию, sum используя параметр rest, таким образом, чтобы функция sum могла принимать любое количество аргументов и возвращать их сумму.


const sum = (...args) => {
    let total = 0;
    for (let i = 0; i < args.length; i++) {
      total += args[i];
    }
    return total;
  }
  console.log(sum(1, 2, 3));

