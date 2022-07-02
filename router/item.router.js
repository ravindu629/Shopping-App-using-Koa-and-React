const Router = require("@koa/router");

const {
  saveItem,
  getAllItems,
  getItem,
  updateItem,
  deleteItem,
} = require("../api/item.api");

const itemRouter = new Router({
  prefix: "/items",
});

itemRouter.get("/", (ctx) => {
  ctx.body = getAllItems();
  ctx.set("Content-type", "application/json");
  ctx.status = 200;
});

itemRouter.get("/:id", (ctx) => {
  const id = ctx.params.id;
  ctx.body = getItem(id);
  ctx.set("Content-type", "application/json");
  ctx.status = 200;
});

itemRouter.post("/", (ctx) => {
  const data = ctx.request.body;
  ctx.body = saveItem(data);
  ctx.set("Content-type", "application/json");
  ctx.status = 201;
});

itemRouter.put("/:id", (ctx) => {
  const id = ctx.params.id;
  const data = ctx.request.body;
  ctx.body = updateItem(id, data);
  ctx.set("Content-type", "application/json");
  ctx.status = 200;
});

itemRouter.delete("/:id", (ctx) => {
  const id = ctx.params.id;
  deleteItem(id);
  ctx.status = 204;
});

module.exports = itemRouter;
