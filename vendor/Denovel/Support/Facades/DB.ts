import {
  Mongo,
  Postgres,
  Mysql,
  Connection,
} from "../../../../config/database.ts";

import {
  DataTypes,
  Database,
  Model,
} from "../../deps.ts";

/**
 * Denovel - A Deno Framework for Web Artisan
 *
 * @package  Denovel
 * @author   Muhammad Fauzan <developerfauzan@asraja.com>
 */

async function driver(Connection: string) {
  if (Connection === "mysql") {
    return new Database("mysql", Mysql);
  } else if (Connection === "postgres") {
    return new Database("postgres", Postgres);
  } else if (Connection === "mongo") {
    return new Database("mongo", Mongo);
  }
}

export const database = (await driver(Connection)) as any;
