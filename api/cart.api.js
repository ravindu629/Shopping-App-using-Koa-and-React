const crypto = require("crypto");

const cartItems = new Map();

const saveCartItem = (item) => {
  const cartItem = { id: crypto.randomUUID(), ...item };
  cartItems.set(cartItem.id, cartItem);
  return cartItem;
};

const getAllCartItems = () => {
  return [...cartItems.values()];
};

module.exports = {
  saveCartItem,
  getAllCartItems,
};
