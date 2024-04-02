// 18. Используйте class ключевое слово для создания Thermostat класса. Принимает constructor температуру по Фаренгейту. В классе создайте объект getter для получения температуры в градусах Цельсия и объект, setter который принимает температуру в градусах Цельсия. Помните, что C = 5/9 * (F - 32) и F = C * 9.0 / 5 + 32, где F– значение температуры в градусах Фаренгейта, а C– значение той же температуры в градусах Цельсия.



class Thermostat {
    constructor(fahrenheit) {
      this._fahrenheit = fahrenheit;
    }
    get temperature() {
      return (5 / 9) * (this._fahrenheit - 32);
    }
    set temperature(celsius) {
      return this._fahrenheit = (celsius * 9.0) / 5 + 32;
    }
  }