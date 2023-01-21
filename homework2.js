/*
Дан массив [1, 2, 3, 4, 5, 6, 7]
Сделайте из этого массива следующий [1, 2, 3, 6, 7]
*/

const arr = [1, 2, 3, 4, 5, 6, 7];
arr.splice(3, 5, 6, 7);
console.log('arr =', arr);

/*
const filteredArr = arr.filter((number) => {
   if (number < 4) {
      return number;
   } if (number > 5) { 
      return number; 
   } 
});

console.log('filteredArr = ', filteredArr);

*/