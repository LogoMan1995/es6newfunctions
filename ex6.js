// 6. Измените функцию increment, добавив параметры по умолчанию, чтобы она добавляла 1 к значению, number если value не указано.

const increment = (number, value = 1) => number + value;

console.log(increment(5, 2)); 
console.log(increment(5)); 
