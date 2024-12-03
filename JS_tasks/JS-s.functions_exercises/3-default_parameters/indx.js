function calculatePrice(price, taxRate = 0.1) {
   return price + (price * taxRate);
}

console.log(calculatePrice(100)); 