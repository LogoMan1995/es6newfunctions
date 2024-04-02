// 16. Выполните рефакторинг функции setGear внутри объекта bicycle, чтобы использовать сокращенный синтаксис, описанный выше.


const bicycle = {
    gear: 2,
    setGear(newGear) {
      "use strict";
      this.gear = newGear;
    }
  };