const Router = require("@koa/router");

const {
  saveCustomer,
  getAllCustomers,
  getCustomer,
  updateCustomer,
  deleteCustomer,
} = require("../api/customer.api");

const customerRouter = new Router({
  prefix: "/customers",
});

customerRouter.get("/", (ctx) => {
  ctx.body = getAllCustomers();
  ctx.set("Content-type", "application/json");
  ctx.status = 200;
});

customerRouter.get("/:id", (ctx) => {
  const id = ctx.params.id;
  ctx.body = getCustomer(id);
  ctx.set("Content-type", "application/json");
  ctx.status = 200;
});

customerRouter.post("/", (ctx) => {
  const data = ctx.request.body;
  ctx.body = saveCustomer(data);
  ctx.set("Content-type", "application/json");
  ctx.status = 201;
});

customerRouter.put("/:id", (ctx) => {
  const id = ctx.params.id;
  const data = ctx.request.body;
  ctx.body = updateCustomer(id, data);
  ctx.set("Content-type", "application/json");
  ctx.status = 200;
});

customerRouter.delete("/:id", (ctx) => {
  const id = ctx.params.id;
  deleteCustomer(id);
  ctx.status = 204;
});

module.exports = customerRouter;
