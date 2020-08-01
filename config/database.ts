import { config } from "https://deno.land/x/dotenv/mod.ts";

const env = config();

/*
|--------------------------------------------------------------------------
| Database Connection Interfaces
|--------------------------------------------------------------------------
|
| It will let you know available databases
| for this framework.
|
*/

export interface dbinterface {
  host: string;
  username: string;
  password: string;
  database: string;
  port: number;
}

/*
|--------------------------------------------------------------------------
| Database Connections
|--------------------------------------------------------------------------
|
| Here are each of the database connections setup for your application.
| Of course, examples of configuring each database platform that is
| supported by Denovel is shown below to make development simple.
|
|
| All database work in Denovel is done through the Typescript ORM facilities
| so make sure you have the driver for your particular database of
| choice installed on your machine before you begin development.
|
*/

export const DBInterface: dbinterface = {
  host: env.DB_HOST,
  username: env.DB_USER || "", //optional
  password: env.DB_PASS || "", //optional
  database: env.DB_NAME || "denovel",
  port: parseInt(env.DB_PORT) || 3306,
};

/**
 * Export connection name
 *
 *
 */

export const Connection: any = env.DB_CONNECTION;
