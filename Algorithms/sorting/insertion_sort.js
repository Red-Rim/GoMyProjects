#!/usr/bin/env node
function insertionsort(arr) {
   for (let i = 1; i < arr.length; i++) {
       let current = arr[i];
       let j = i - 1;
       
       while (j >= 0 && arr[j] > current) {
           arr[j + 1] = arr[j];
           j--;
       }

       arr[j + 1] = current;
   }
   return arr;
}

// exp
let numbers = [12, 1, 139, 58, 444];
console.log(insertionsort(numbers));
