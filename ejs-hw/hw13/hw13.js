// Масив, який містить об'єкти з інформацією про транспортні засоби
const vehicles = [
    {
      model: "Toyota Camry",
      type: "Легковий автомобіль",
      year: 2019,
      isOperational: true
    },
    {
      model: "Ford Transit",
      type: "Вантажівка",
      year: 2015,
      isOperational: false
    },
    {
      model: "Honda CR-V",
      type: "Кросовер",
      year: 2021,
      isOperational: true
    },
    {
      model: "Volkswagen Golf",
      type: "Хетчбек",
      year: 2018,
      isOperational: true
    },
    {
      model: "Mercedes-Benz Sprinter",
      type: "Мікроавтобус",
      year: 2020,
      isOperational: true
    }
  ];
  
  // Всі транспортні засоби в масиві
  console.log("Всі транспортні засоби:");
  for (let i = 0; i < vehicles.length; i++) {
    console.log(`Модель: ${vehicles[i].model}, Тип: ${vehicles[i].type}, Рік випуску: ${vehicles[i].year}, Робочий стан: ${vehicles[i].isOperational}`);
  }
  
  // Транспортні засоби, які є в робочому стані
  console.log("\nТранспортні засоби у робочому стані:");
  for (let i = 0; i < vehicles.length; i++) {
    if (vehicles[i].isOperational) {
      console.log(`Модель: ${vehicles[i].model}`);
    }
  }