// Оператор if
// Перевірка часу: Напишіть код, який перевіряє час доби у змінній hour і виводить "Доброго ранку!" якщо час менше 12.

const hour = 10;

if (hour < 12) {
    console.log("Доброго ранку!");
}

// Перевірка віку: Напишіть програму, яка перевіряє вік користувача і виводить "Ви повнолітній", якщо вік більший або дорівнює 18.

const age = 20;

if (age >= 18) {
    console.log("Ви повнолітній");
}

// Оператор if else
// Парність числа: Напишіть програму, яка перевіряє, чи є число парним або непарним, і виводить відповідне повідомлення. (згадайте ознаки парних чисел з математики та оператор % в JavaScript)

const number = 7;

if (number % 2 === 0) {
    console.log("Число парне");
} else {
    console.log("Число непарне");
}

// Оператор if else if
// Оцінка за балами: Напишіть програму, яка оцінює бали студента(від 0 до 100) і виводить оцінку: "відмінно"(90 - 100), "добре"(70 - 89), "задовільно"(50 - 69), "незадовільно"(менше 50).

const mark = 75;

if (mark >= 90 && mark <= 100) {
    console.log("Відмінно");
} else if (mark >= 70 && mark < 90) {
    console.log("Добре");
} else if (mark >= 50 && mark < 70) {
    console.log("Задовільно");
} else if (mark < 50){
    console.log("Незадовільно");    
} else {
    console.log("Невірні дані");
};

// Визначення пори року: Напишіть програму, яка визначає пору року залежно від номера місяця і виводить відповідне повідомлення.

const month = 13;

if (month >= 3 && month <= 5) {
    console.log("Весна");
} else if (month >= 6 && month <= 8) {
    console.log("Літо");
} else if (month >= 9 && month <= 11) {
    console.log("Осінь");
} else if (month === 1 || month === 2 || month === 12) {
    console.log("Зима");
} else {
    console.log("Нумерація місяців тільки від 1 до 12");
}

// Оператор switch case
// Обмін долларів, евро або британських фунтів на гривню по встановленому заздалегідь курсу кожної валюти для 100 грошових одиниць.

const currency = "доллар";

switch (currency) {
    case "доллар":
        console.log("Отримано " + (100 * 39.5) + " гривень за 100 долларів");
        break;
    case "євро":
        console.log("Отримано " + (100 * 42.8) + " гривень за 100 євро");
        break;
    case "фунт":
        console.log("Отримано " + (100 * 49.7) + " гривень за 100 британських фунтів");
        break;
    default:
        console.log("Не вірно введено валюту");
        break;
}

// Тернарний оператор
// Повідомлення про знижку: Напишіть однорядковий код, який виводить "Знижка 10%", якщо сума покупки перевищує 1000 грн, а інакше — "Без знижки"

const purchaseAmount = 1200;
const discountMessage = purchaseAmount > 1000 ? "Знижка 10%" : "Без знижки";

console.log(discountMessage);
