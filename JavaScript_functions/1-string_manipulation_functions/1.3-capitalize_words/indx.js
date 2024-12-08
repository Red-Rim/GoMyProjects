function capitalize(str) {
   return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
 }

 console.log(capitalize("red rim"));