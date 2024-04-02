// 9. Замените два присваивания эквивалентным присваиванием деструктуризации. Он по-прежнему должен присваивать переменные todayи tomorrowзначения объекта todayи tomorrowиз HIGH_TEMPERATURES него.

const HIGH_TEMPERATURES = {
    yesterday: 75,
    today: 77,
    tomorrow: 80
  };
  

  
  const {today, tomorrow} = HIGH_TEMPERATURES;
  

