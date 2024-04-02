// 12. Используйте назначение деструктуризации с остальным синтаксисом, чтобы эмулировать поведение Array.prototype.slice(). removeFirstTwo() должен возвращать подмассив исходного массива list с опущенными первыми двумя элементами.

function removeFirstTwo(list) {
    
    const [a, b, ...shorterList] = list; 
   
    return shorterList;
  }
  
  const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const sourceWithoutFirstTwo = removeFirstTwo(source);

