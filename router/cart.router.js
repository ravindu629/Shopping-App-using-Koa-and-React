const Router = require("@koa/router");

const { saveCartItem, getAllCartItems } = require("../api/cart.api");

const cartRouter = new Router({
  prefix: "/cartItems",
});

cartRouter.get("/", (ctx) => {
  ctx.body = getAllCartItems();
  ctx.set("Content-type", "application/json");
  ctx.status = 200;
});

cartRouter.post("/", (ctx) => {
  const data = ctx.request.body;
  ctx.body = saveCartItem(data);
  ctx.set("Content-type", "application/json");
  ctx.status = 201;
});

module.exports = cartRouter;
