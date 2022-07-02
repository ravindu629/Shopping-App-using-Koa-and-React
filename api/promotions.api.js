const crypto = require("crypto");

const promotions = new Map();

const savePromotion = (promo) => {
  const newPromo = { id: crypto.randomUUID(), ...promo };
  promotions.set(newPromo.id, newPromo);
  return newPromo;
};

const getAllPromotions = () => {
  return [...promotions.values()];
};

module.exports = {
  savePromotion,
  getAllPromotions,
};
