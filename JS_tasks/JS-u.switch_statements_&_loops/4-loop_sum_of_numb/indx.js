function numbsum(target) {
   let sum = 0;
   let i = 1;

   while (i <= target) {
       sum += i;
       i++;
   }

   console.log(`The sum of numbers from 1 to ${target} is: ${sum}`);
}

numbsum(5);
