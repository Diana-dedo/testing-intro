function notImplemented() {
  throw new Error('Корзина ещё не реализована. Сначала прочитайте тесты.');
}

function addToCart(cart, product, quantity) { 
  if (quantity <= 0) {
    throw new RangeError();
  }
  if (quantity > product.stock) {
    throw new RangeError();
  } 
  const existingItem = cart.find(item => item.id === product.id);
  if (existingItem) {
    if (existingItem.quantity + quantity > product.stock) {
      throw new RangeError();
    }
    existingItem.quantity += quantity;
  } else {
    cart.push({ ...product, quantity });
  }
  return cart;
}

function changeQuantity(cart, productId, quantity) {
  if (quantity <= 0) {
    throw new RangeError();
  }
  const item = cart.find(i => i.id === productId);
  if (item) {
    if(quantity > item.stock) {
      throw new RangeError();
    }
    item.quantity = quantity;
  }
return cart;
}

function removeFromCart(cart, productId) {
  return cart.filter(item => item.id !== productId);
}

function calculateCartSubtotal(cart) {
  return cart.reduce((sum, item) => sum + item.quantity * item.price, 0);
}

function calculateOrderTotal(cart, promoCode) {
  const subtotal = calculateCartSubtotal(cart);
  let discount = 0;
  if (promoCode === 'SAVE10' && subtotal >= 20000) {
    discount = subtotal * 0.1;
  }
  let delivery = 30000;
  if (subtotal >= 50000) {
    delivery = 0;
  }
  const total = subtotal - discount + delivery;
  return { subtotal, discount, delivery, total };
}

const cartApi = { addToCart, changeQuantity, removeFromCart, calculateCartSubtotal, calculateOrderTotal };

if (typeof module !== 'undefined') module.exports = cartApi;
if (typeof window !== 'undefined') window.cartApi = cartApi;
