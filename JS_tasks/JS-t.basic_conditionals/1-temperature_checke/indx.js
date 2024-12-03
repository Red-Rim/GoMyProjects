function tempcheck(temperature) {
   if (temperature >= 35) {
       console.log("it's very hot!");
   } else if (temperature >= 25) {
       console.log("it's warm");
   } else if (temperature >= 15) {
       console.log("it's cool");
   } else {
       console.log("it's cold");
   }
}

tempcheck(50);
