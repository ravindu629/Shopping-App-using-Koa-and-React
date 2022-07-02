const Router = require("@koa/router");

const {
  saveTrader,
  getAllTraders,
  getTrader,
  updateTrader,
  deleteTrader,
} = require("../api/trader.api");

const traderRouter = new Router({
  prefix: "/traders",
});

traderRouter.get("/", (ctx) => {
  ctx.body = getAllTraders();
  ctx.set("Content-type", "application/json");
  ctx.status = 200;
});

traderRouter.get("/:id", (ctx) => {
  const id = ctx.params.id;
  ctx.body = getTrader(id);
  ctx.set("Content-type", "application/json");
  ctx.status = 200;
});

traderRouter.post("/", (ctx) => {
  const data = ctx.request.body;
  ctx.body = saveTrader(data);
  ctx.set("Content-type", "application/json");
  ctx.status = 201;
});

traderRouter.put("/:id", (ctx) => {
  const id = ctx.params.id;
  const data = ctx.request.body;
  ctx.body = updateTrader(id, data);
  ctx.set("Content-type", "application/json");
  ctx.status = 200;
});

traderRouter.delete("/:id", (ctx) => {
  const id = ctx.params.id;
  deleteTrader(id);
  ctx.status = 204;
});

module.exports = traderRouter;
