const crypto = require("crypto");

const traders = new Map();

const saveTrader = (trader) => {
  const newTrader = { id: crypto.randomUUID(), ...trader };
  traders.set(newTrader.id, newTrader);
  return newTrader;
};

const getTrader = (id) => {
  const trader = traders.get(id);
  if (!trader) {
    throw new Error(`Not found for the id ${id}`);
  }

  return trader;
};

const getAllTraders = () => {
  return [...traders.values()];
};

const updateTrader = (id, trader) => {
  if (!traders.has(id)) {
    throw new Error(`Not found for the id ${id}`);
  }
  const updatedTrader = { id, ...trader };
  traders.set(updatedTrader.id, updatedTrader);
  return updatedTrader;
};

const deleteTrader = (id) => {
  if (!traders.has(id)) {
    throw new Error(`Not found for the id ${id}`);
  }

  traders.delete(id);
};

module.exports = {
  saveTrader,
  getAllTraders,
  getTrader,
  updateTrader,
  deleteTrader,
};
