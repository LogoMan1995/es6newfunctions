// 14. Используйте синтаксис литералов шаблона с обратными кавычками, чтобы создать массив li строк элементов списка ( ). Текст каждого элемента списка должен быть одним из элементов массива failure свойства объекта result и иметь class атрибут со значением text-warning. Функция makeList должна возвращать массив строк элементов списка.

const result = {
    success: ["max-length", "no-amd", "prefer-arrow-functions"],
    failure: ["no-var", "var-on-top", "linebreak"],
    skipped: ["no-extra-semi", "no-dup-keys"]
  };
  function makeList(arr) {
    const failureItems = [];
    for (let i = 0; i < arr.length; i++) {
      failureItems.push(`<li class="text-warning">${arr[i]}</li>`);
    }
    return failureItems;
  }
  
  const failuresList = makeList(result.failure);
  console.log(failuresList)