function fibonacci(n) {
   let x = 0, y = 1;
   let result = [];

   for (let i = 0; i < n; i++) {
       result.push(x); 
       let next = x + y;
       x = y;
       y = next;
   }

   return result;
}


console.log(fibonacci(5));