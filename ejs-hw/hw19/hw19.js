let arr = [1, 2, 3, 4, 5, 6];

// Реалізація push
let newElement = 7;  
let newArrayPush = [...arr, newElement];

console.log(newArrayPush);  

// Реалізація pop
let newArrayPop = [];
let lastElement;
for (let i = 0; i < arr.length; i++) {
    if (i < arr.length - 1) {
        newArrayPop[i] = arr[i];
    } else {
        lastElement = arr[i];
    }
}

console.log(newArrayPop);  
console.log(lastElement);  

// Реалізація map
let resultMap = [];
for (let i = 0; i < arr.length; i++) {
    resultMap = [...resultMap, arr[i] * 5];
}

console.log(resultMap);  


// Реалізація filter
let resultFilter = [];
for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
        resultFilter = [...resultFilter, arr[i]];
    }
}

console.log(resultFilter);  

// Реалізація reduce
let sum = 0;
let i = 0;

while (i < arr.length) {
    sum += arr[i];
    i++;
}

console.log(sum);  
