function check(names, search) {

   for (let name of names) {

     if (name === search) {
       return true;
     }

   }
   return false;
 }

 console.log(check(["Alice", "Bob", "Charlie"], "Bob"));
 console.log(check(["Alice", "Bob", "Charlie"], "salma"));
