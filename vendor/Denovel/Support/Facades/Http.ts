import {
  Application,
  isHttpError,
  Status,
} from "https://deno.land/x/oak/mod.ts";
import { oakCors } from "https://deno.land/x/cors/mod.ts";
import { Session } from "https://deno.land/x/session/mod.ts";
import { router } from "../../../../routes/web.ts";
import { Snelm } from "https://deno.land/x/snelm/mod.ts";
import { organ } from "https://raw.githubusercontent.com/denjucks/organ/master/mod.ts";
import { warning } from "https://deno.land/x/colorlog/mod.ts";
import Handler from "../../../../app/Exceptions/Handler.ts";

/**
 * Denovel - A Deno Framework for Web Artisan
 *
 * @package  Denovel
 * @author   Muhammad Fauzan <developerfauzan@asraja.com>
 */

// Init application & handler
const app = new Application();
const handler = new Handler();

// Configuring Session for the Oak framework
const session = new Session({ framework: "oak" });

// Other Configuration :
// const session = new Session({
//   framework: "oak",
//   store: "redis",
//   hostname: "127.0.0.1";
//   port: 6379,
// });

// const session = new Session({
//   framework: "oak",
//   store: "memory",
// });
await session.init();

/**
 * Get the response time of the application
 *
 * @return {Promise<void>}
 */
app.use(
  async (ctx, next): Promise<void> => {
    await next();
    const rt = ctx.response.headers.get("X-Response-Time");
    console.log(warning(`[${ctx.request.method}] ${ctx.request.url} - ${rt}`));
  }
);

/**
 * Set the response time of the application
 *
 * @return {Promise<void>}
 */
app.use(
  async (ctx, next): Promise<void> => {
    const start = Date.now();
    await next();
    const ms = Date.now() - start;
    ctx.response.headers.set("X-Response-Time", `${ms}ms`);
  }
);

/**
 * Oak Plugin
 *
 */
// Creating and initializing a Snelm object and setting Oak as the framework
const snelm = new Snelm("oak");

// Adding the Organ middleware. Note that when no values are passed to the
// organ function, the default format "combined" will be used. For more info
// on this format, see the section on predefined formats below.
app.use(organ());

/**
 * Router Plugin
 *
 */
app.use(oakCors());

app.use(router.routes());
app.use(router.allowedMethods());

// Init error handling
app.use(async (ctx, next) => {
  handler.render(ctx, ctx.response.status);

  await next();
});

// Adding the Session middleware. Now every context will include a property
// called session that you can use the get and set functions on
app.use(session.use()(session));
// These are default options
// https://deno.land/x/session/README.md for more options
// app.use(session.use()(session, { path: "/", httpOnly: true, secure: false }));

// Passing the request and response object into the snelm function. That's all
// you need to do to use Snelm! Now all responses objects will have the
// additional security measures provided by Snelm.

app.use((ctx, next) => {
  ctx.response = snelm.snelm(ctx.request, ctx.response);

  next();
});

app.use(async (ctx) => {
  const result = await ctx.request.body({
    contentTypes: {
      raw: ["text"],
      text: ["application/javascript"],
    },
  });
});

export { app };
