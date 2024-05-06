// 1. Конкатенація рядків: Складіть повідомлення про ваш улюблений фільм, його жанр і рік виходу, використовуючи конкатенацію через оператор + та шаблонні рядки.
let film = "Інтерстеллар";
let genre = "наукова фантастика";
let year = 2014;

let message1 = "Мій улюблений фільм - " + film + ", жанр: " + genre + ", рік виходу: " + year;
console.log(message1);

let message2 = `Мій улюблений фільм - ${film}, жанр: ${genre}, рік виходу: ${year}`;
console.log(message2);

let message3 = `Мій улюблений фільм - ${film}`.concat(`, жанр: ${genre}, рік виходу: ${year}`);
console.log(message3);

// 2. Робота з екрануванням символів: Сформуйте рядок з вашим улюбленим висловом, використовуючи різні типи кавичок і включаючи в нього символи нового рядка та табуляції.
let expression = "\"Життя\" схоже на \'їзду\' на велосипеді. \n\t\tЩоб утримати \`рівновагу\`, \n\t\ви повинні \"постійно\" рухатися."    
console.log(expression)

// 3. Пошук у рядку: Визначте, на якій позиції знаходиться слово "світло" та "темрява" у вірші, і перевірте, чи зустрічається слово "світло" на початку чи в кінці рядка.
let verse = "Світло кінця тунелю, а за спиною лише темрява";

let positionLight = verse.indexOf("Світло");
let positionDarkness = verse.indexOf("темрява");
console.log(positionLight);
console.log(positionDarkness);

let startsWithLight = verse.startsWith("Світло");
let endsWithLight = verse.endsWith("Світло");
console.log(startsWithLight);
console.log(endsWithLight);

// 4. Зміна регістру та заміна частини рядка: Перетворіть всі символи рядка на малі літери, потім замініть слово "сонце" на "місяць".
let phrase = "Сонце світить яскраво";

let phraseToLowerCase = phrase.toLowerCase();
console.log(phraseToLowerCase);

let phraseReplace = phraseToLowerCase.replace("сонце", "місяць");
console.log(phraseReplace);