function fibonacci(s) {
   if (s <= 1) {
     return s;
   }
   return fibonacci(s - 1) + fibonacci(s - 2);
 }
 
 console.log(fibonacci(8));
 