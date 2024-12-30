function ticket(age) {
   let price;
   if (age <= 12) {
     price = "$10";
   } else if (age >= 13 && age <= 17) {
     price = "$15";
   } else {
     price = "$20";
   }
   return `the price for ${age} is ${price}`;
 }
 
 console.log(ticket(15));