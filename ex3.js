// 3. В этом задании вы будете использовать Object.freeze методы предотвращения изменения математических констант. Вам необходимо заморозить MATH_CONSTANTS объект, чтобы никто не мог изменить значение PI, добавить или удалить свойства.

function freezeObj() {
    const MATH_CONSTANTS = {
      PI: 3.14
    };
    Object.freeze(MATH_CONSTANTS);
    try {
      MATH_CONSTANTS.PI = 99;
    } catch(ex) {
      console.log(ex);
    }
    return MATH_CONSTANTS.PI;
  }
  const PI = freezeObj();