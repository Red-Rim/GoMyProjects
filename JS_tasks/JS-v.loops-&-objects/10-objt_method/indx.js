let calculator = {
   add: function(x, y) {
     return x + y;
   },
   subtract: function(x, y) {
     return x - y;
   },
   multiply: function(x, y) {
     return x * y;
   }
 };

 console.log("addition: " + calculator.add(1, 2));
 console.log("subtraction: " + calculator.subtract(2, 1));
 console.log("multiplication: " + calculator.multiply(1, 2));
 