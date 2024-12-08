function filter(arr, cdn) {
   return arr.filter(cdn);
 }

console.log(filter([1, 2, 3, 4], num => num % 2 === 0));