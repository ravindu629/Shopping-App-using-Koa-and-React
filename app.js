const Koa = require("koa");
const bodyParser = require("koa-bodyparser");
const cors = require("@koa/cors");

const customerRouter = require("./router/customer.router");
const traderRouter = require("./router/trader.router");
const itemRouter = require("./router/item.router");
const promotionsRouter = require("./router/promotions.router");
const cartRouter = require("./router/cart.router");

const app = new Koa();

app.use(bodyParser());
app.use(cors());

//register routes and methods
app.use(customerRouter.routes()).use(customerRouter.allowedMethods());
app.use(traderRouter.routes()).use(traderRouter.allowedMethods());
app.use(itemRouter.routes()).use(itemRouter.allowedMethods());
app.use(promotionsRouter.routes()).use(promotionsRouter.allowedMethods());
app.use(cartRouter.routes()).use(cartRouter.allowedMethods());

app.use((ctx) => {
  ctx.set("Content-Type", "text/html");
  ctx.body = "<h1>Hello</h1>";
  //ctx.status = 404;
});

app.listen(5000);
