// ПЕРШИЙ ВАРІАНТ
// Функції для арифметичних операцій
function add(a, b) {
    return a + b;
  }
  
  function subtract(a, b) {
    return a - b;
  }
  
  function multiply(a, b) {
    return a * b;
  }
  
  function divide(a, b) {
    if (b !== 0) {
        return a / b;      
    } else {
        return "Ділення на нуль неможливе";
    }
  }
  
  // Функція-калькулятор
  function calculator() {
    const num1 = +prompt("Введіть перше число:");
    const num2 = +prompt("Введіть друге число:");
    const operator = prompt("Введіть операцію (+, -, *, /):");
  
    const operations = {
    "+": add,
    "-": subtract,
    "*": multiply,
    "/": (a, b) => divide(a, b),
  };
  
    const result =
      operations[operator]
        ? operations[operator](num1, num2)
        : "Невідома операція";
  
    alert(`Результат: ${result}`);
  }
  
  // Виклик функції-калькулятора
  calculator();

// ДРУГИЙ ВАРІАНТ
// Функція для арифметичних операцій
function calculate(operator, a, b) {
  const operations = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
    '*': (a, b) => a * b,
    '/': (a, b) => (b !== 0 ? a / b : "Ділення на нуль неможливе"),
  };

  return operator in operations ? operations[operator](a, b) : "Невідома операція";
}

// Функція-калькулятор
function calculator() {
  const num1 = +prompt("Введіть перше число:");
  const num2 = +prompt("Введіть друге число:");
  const operator = prompt("Введіть операцію (+, -, *, /):");

  const result = calculate(operator, num1, num2);

  alert(`Результат: ${result}`);
}

// Виклик функції-калькулятора
calculator();
