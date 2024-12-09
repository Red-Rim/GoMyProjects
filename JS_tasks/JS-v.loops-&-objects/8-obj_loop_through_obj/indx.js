let book = {
   title: "Harry Potter and the Sorcerer's Stone",
   author: "J.K. Rowling",
   year: 1997,
   genre: "Fantasy"
 };
 
 for (let key in book) {
   console.log(key + ": " + book[key]);
 }