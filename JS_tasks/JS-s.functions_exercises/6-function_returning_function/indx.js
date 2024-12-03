function createMultiplier(factor) {
   return function(number) {
       return number * factor;
   };
}

const double = createMultiplier(2);
const triple = createMultiplier(3);

console.log(double(2));
console.log(triple(3));