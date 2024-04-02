// 17. Используйте class ключевое слово и напишите a, constructor чтобы создать Vegetable class.Класс Vegetable позволяет вам создать овощной объект со свойством name, которое передается в файл constructor.


class Vegetable {
    constructor(name) {
      this.name = name;
    }
  }
  
  const carrot = new Vegetable("carrot");
  console.log(carrot.name); 