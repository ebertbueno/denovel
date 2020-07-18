import {
  Mongo,
  Postgres,
  Mysql,
  Connection,
} from "../../../../config/database.ts";
import { connectMongo, connectPgsql, connectMysql } from "../../drivers/mod.ts";
import { Client as PgsqlClient } from "https://deno.land/x/postgres/mod.ts";
import { Database as MongodClient } from "https://deno.land/x/mongo@v0.6.0/mod.ts";
import { Client as MysqlClient } from "https://deno.land/x/mysql/mod.ts";

/**
 * Denovel - A Deno Framework for Web Artisan
 *
 * @package  Denovel
 * @author   Muhammad Fauzan <developerfauzan@asraja.com>
 */

async function driver(
  Connection: string
): Promise<PgsqlClient | MongodClient | MysqlClient | undefined> {
  if (Connection === "pgsql") {
    return connectPgsql(Postgres);
  } else if (Connection === "mongod") {
    return connectMongo(Mongo);
  } else if (Connection === "mysql") {
    return connectMysql(Mysql);
  }
}

export const database = (await driver(Connection)) as any;
