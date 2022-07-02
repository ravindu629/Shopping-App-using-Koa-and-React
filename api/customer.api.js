const crypto = require("crypto");

const customers = new Map();

const saveCustomer = (customer) => {
  const newCustomer = { id: crypto.randomUUID(), ...customer };
  customers.set(newCustomer.id, newCustomer);
  return newCustomer;
};

const getCustomer = (id) => {
  const customer = customers.get(id);
  if (!customer) {
    throw new Error(`Not found for the id ${id}`);
  }

  return customer;
};

const getAllCustomers = () => {
  return [...customers.values()];
};

const updateCustomer = (id, customer) => {
  if (!customers.has(id)) {
    throw new Error(`Not found for the id ${id}`);
  }
  const updatedCustomer = { id, ...customer };
  customers.set(updatedCustomer.id, updatedCustomer);
  return updatedCustomer;
};

const deleteCustomer = (id) => {
  if (!customers.has(id)) {
    throw new Error(`Not found for the id ${id}`);
  }

  customers.delete(id);
};

module.exports = {
  saveCustomer,
  getAllCustomers,
  getCustomer,
  updateCustomer,
  deleteCustomer,
};
