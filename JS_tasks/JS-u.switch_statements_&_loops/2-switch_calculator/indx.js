function calculator(n1, n2, operator) {
   switch (operator) {
       case '+':
           console.log(`result: ${n1 + n2}`);
           break;
       case '-':
           console.log(`result: ${n1 - n2}`);
           break;
       case '*':
           console.log(`result: ${n1 * n2}`);
           break;
       case '/':
           if (n2 === 0) {
               console.log("division by zero is not allowed");
           } else {
               console.log(`result: ${n1 / n2}`);
           }
           break;
       default:
           console.log("Invalid");
   }
}
calculator(5, 3, '+');
