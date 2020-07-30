import { config } from "https://deno.land/x/dotenv/mod.ts";

/*
|--------------------------------------------------------------------------
| Database Connection Interfaces
|--------------------------------------------------------------------------
|
| It will let you know available databases
| for this framework.
|
*/

export interface mysql {
  host: string;
  username: string;
  password: string;
  database: string;
}

export interface postgres {
  host: string;
  username: string;
  password: string;
  database: string;
}

export interface mongo {
  host: string;
  username: string;
  password: string;
  database: string;
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

export const Mysql: mysql = {
  host: config().DB_HOST || "localhost",
  username: config().DB_USER || "root",
  password: config().DB_PASS || "",
  database: config().DB_NAME || "denovel",
};

export const Postgres: postgres = {
  host: config().DB_HOST || "localhost",
  username: config().DB_USER || "root",
  password: config().DB_PASS || "",
  database: config().DB_NAME || "denovel",
};

export const Mongo: mongo = {
  host: config().DB_HOST || "mongodb://localhost",
  username: config().DB_USER, //optional
  password: config().DB_PASS, //optional
  database: config().DB_NAME || "denovel",
};

/**
 * Export connection name
 *
 *
 */

export const Connection = config().DB_CONNECTION;
