document.addEventListener('DOMContentLoaded', function () {
   const box_color = document.getElementById('color-box');
   const button_color = document.getElementById('change-color');

   function random_gradient(){
       const color1 = random_color();
       const color2 = random_color();
       return `linear-gradient(${color1}, ${color2})`;
   }

   function random_color() {
      return '#' + Math.floor(Math.random() * 16777215).toString(16);
  }
  
   button_color.addEventListener('click', function() {
       const new_color = random_gradient();
       box_color.style.background = new_color;
       box_color.style.transform = 'scale(1.05)'; 
   });
});
