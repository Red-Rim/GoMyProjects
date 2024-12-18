function price_update() {
  let total = 0;
  const products = document.querySelectorAll('.card-body');
  
  products.forEach(product => {
    const price = parseFloat(product.querySelector('.unit-price').textContent.replace('$', ''));
    const quantity = parseInt(product.querySelector('.quantity').textContent);
      total += price * quantity;
  });
  document.querySelector('.total').textContent = `${total.toFixed(1)} $`;
}


function quantity_update(element, increment) {
  const my_quantity = element.closest('.card-body').querySelector('.quantity');
  let quantity = parseInt(my_quantity.textContent);
  quantity = increment ? quantity + 1 : Math.max(0, quantity - 1); 
  my_quantity.textContent = quantity;
  price_update();
}


document.addEventListener('click', (event) => {
  const target = event.target;


  if (target.classList.contains('fa-plus-circle')) {
    quantity_update(target, true);
  }
  

  if (target.classList.contains('fa-minus-circle')) {
    quantity_update(target, false);
  }


  if (target.classList.contains('fa-trash-alt')) {
    const product = target.closest('.card-body'); //find the closest elem with the name of class
    product.remove();
    price_update();
  }


  if (target.classList.contains('fa-heart')) //check if the elem contain the class (liked button)
  {
    target.classList.toggle('liked'); //toggle the 'like' means (add or remove)
    target.style.color = target.classList.contains('liked') ? 'red' : 'black';
  }
});


price_update();