const Router = require("@koa/router");

const { savePromotion, getAllPromotions } = require("../api/promotions.api");

const promotionsRouter = new Router({
  prefix: "/promotions",
});

promotionsRouter.get("/", (ctx) => {
  ctx.body = getAllPromotions();
  ctx.set("Content-type", "application/json");
  ctx.status = 200;
});

promotionsRouter.post("/", (ctx) => {
  const data = ctx.request.body;
  ctx.body = savePromotion(data);
  ctx.set("Content-type", "application/json");
  ctx.status = 201;
});

module.exports = promotionsRouter;
