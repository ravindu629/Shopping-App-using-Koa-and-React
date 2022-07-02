const crypto = require("crypto");

const items = new Map();

const saveItem = (item) => {
  const newitem = { id: crypto.randomUUID(), ...item };
  items.set(newitem.id, newitem);
  return newitem;
};

const getItem = (id) => {
  const item = items.get(id);
  if (!item) {
    throw new Error(`Not found for the id ${id}`);
  }

  return item;
};

const getAllItems = () => {
  return [...items.values()];
};

const updateItem = (id, Item) => {
  if (!items.has(id)) {
    throw new Error(`Not found for the id ${id}`);
  }
  const updatedItem = { id, ...Item };
  items.set(updatedItem.id, updatedItem);
  return updatedItem;
};

const deleteItem = (id) => {
  if (!items.has(id)) {
    throw new Error(`Not found for the id ${id}`);
  }

  items.delete(id);
};

module.exports = {
  saveItem,
  getAllItems,
  getItem,
  updateItem,
  deleteItem,
};
