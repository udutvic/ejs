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
    const operator = prompt("Введіть операцію (+, -, *, /):");
    const num2 = +prompt("Введіть друге число:");
  
    let result;
  
    switch (operator) {
      case "+":
        result = add(num1, num2);
        break;
      case "-":
        result = subtract(num1, num2);
        break;
      case "*":
        result = multiply(num1, num2);
        break;
      case "/":
        result = divide(num1, num2);
        break;
      default:
        result = "Невідома операція";
    }
  
    alert(`Результат: ${result}`);
  }
  
  // Виклик функції-калькулятора
  calculator();