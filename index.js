var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var temp={
    itemName : [item],
    itemPrice: (Math.floor(Math.random()*100))
  };
  cart[cart.length]=temp;
  return `${item} has been added to your cart.`
}

function viewCart() {
  for(var i=0; i<cart.length;i++){
    
  }
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
