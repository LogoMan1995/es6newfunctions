// 10. Замените два присваивания эквивалентным присваиванием деструктуризации. Он по-прежнему должен присваивать переменные lowToday и highToday значения объекта today.low и today.high из LOCAL_FORECAST него.


const LOCAL_FORECAST = {
    yesterday: { low: 61, high: 75 },
    today: { low: 64, high: 77 },
    tomorrow: { low: 68, high: 80 }
  };
  
 
  const { today: { low: lowToday, high: highToday } } = LOCAL_FORECAST;
  console.log(lowToday);
  console.log(highToday);


