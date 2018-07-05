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
  return `${item} has been added to your cart.`;
}

function viewCart() {
  if(cart.length!==0){
   var returnStatement= `In your cart, you have`;
    for(var i=0; i<cart.length;i++){
      if(cart.length-1===i&&cart.length>1){
        returnStatement+= ` and`;
      }
      returnStatement+= ` ${cart[i].itemName} at $${cart[i].itemPrice}`;
      if(cart.length>i+1){
        returnStatement+= `,`;
      }
    //In your cart, you have\\ bananas at $17, pancake batter at $5, and eggs at $49.
    }
    returnStatement+= `.`;
    return returnStatement;
  }else{
    return `Your shopping cart is empty.`;
  }
}

function total() {
  var dollarTotal=0;
  for(var i=0; i<cart.length;i++){
    dollarTotal+= cart[i].itemPrice;
  }
  return dollarTotal;
}

function removeFromCart(item) {
  //if item is in cart remove and return updated cart
  //if item not in cart, return 
}

function placeOrder(cardNumber) {
  // write your code here
}
