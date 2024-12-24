class Product {
  constructor(id, name, price) {
    this.id = id;
    this.name = name;
    this.price = price;
  }
}

class shopping_cart {
  constructor() {
    this.items = [];
  }

  add(product) {
    const item = this.items.find(i => i.product.id === product.id);
    item ? item.quantity++ : this.items.push({ product, quantity: 1 });
  }

  remove(product_id) {
    const item = this.items.find(i => i.product.id === product_id);
    if (item) {
      item.quantity > 1 ? item.quantity-- : this.items = this.items.filter(i => i.product.id !== product_id);
    }
  }

  delete(product_id) {
    this.items = this.items.filter(i => i.product.id !== product_id);
  }

  total() {
    return this.items.reduce((sum, i) => sum + i.product.price * i.quantity, 0);
  }
}

const products = [
  new Product(1, "Baskets", 100),
  new Product(2, "Socks", 20),
  new Product(3, "Bag", 50),
];

const cart = new shopping_cart();

function update() {
  document.querySelectorAll('.quantity').forEach((elem, index) => {
    const item = cart.items.find(i => i.product.id === products[index].id);
    elem.textContent = item ? item.quantity : 0;
  });
  document.querySelector('.total').textContent = `${cart.total()} $`;
}

document.querySelectorAll('.fa-plus-circle, .fa-minus-circle, .fa-trash-alt').forEach((btn, index) => {
  const product = products[Math.floor(index / 3)];
  btn.addEventListener('click', () => {
    if (btn.classList.contains('fa-plus-circle')) cart.add(product);    //add prod
    else if (btn.classList.contains('fa-minus-circle')) cart.remove(product.id);  //remove one prod
    else cart.delete(product.id);   //delete prod
    update();
  });
});

document.querySelectorAll('.fa-heart').forEach(btn => {
  btn.addEventListener('click', () => {
    btn.classList.toggle('liked');
    btn.style.color = btn.classList.contains('liked') ? 'red' : 'black';    //change color
  });
});

update();