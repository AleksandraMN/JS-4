/*
Используя Math.random() вам необходимо генерировать цифры от 0 до 9, и создать массив состоящий из 5 таких элементов
1. Рассчитать сумму элементов этого массива
2. Найти минимальное число
3. Найти есть ли в этом массиве число 3
*/

function getRandomIntInclusive(min, max) {
   min = Math.ceil(min);
   max = Math.floor(max);
   return Math.floor(Math.random() * (max - min + 1)) + min; 
}
const array = [];
for (let i = 0; i < 5; i++) {
   array[i] = getRandomIntInclusive(0, 9);
};
console.log('array =', array);

//1. Рассчитать сумму элементов этого массива
/*
let sum = 0;
for (let i = 0; i < 5; i++) {
   sum = sum + array[i];
};
console.log('sum =', sum);
*/

const sum = array.reduce((acc, number, index, array)=> {
   return acc + number;
}, 0);
console.log('sum =', sum);

//2. Найти минимальное число

let min = array[0];
for (const number of array) {
   if (number < min) {
      min = number;
   }
};
console.log('Минимальное число =', min);


const minNumber = Math.min.apply(null, array);
console.log('Минимальное число =', minNumber);



// 3. Найти есть ли в этом массиве число 3.

if (array.indexOf(3)!== -1) {
   console.log('В этом массиве есть число 3.');
} else { console.log('В этом массиве нет числа 3.');};


const isSearchNumber = array.includes(3);
console.log('isSearchNumber', isSearchNumber);


const searchNumber = array.find((number) => {
   return number === 3; 
});
const searchIndex = array.findIndex((number) => {
   return number === 3; 
});
console.log('searchNumber =', searchNumber);
console.log('searchIndex =', searchIndex);





