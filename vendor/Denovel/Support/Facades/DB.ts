import {DataTypes, Database, Model} from "https://deno.land/x/denodb@v1.0.7/mod.ts";
import {DBInterface, Connection} from "../../../../config/database.ts";

/**
 * Denovel - A Deno Framework for Web Artisan
 *
 * @package  Denovel
 * @author   Muhammad Fauzan <developerfauzan@asraja.com>
 */

const db: Database = new Database(Connection, {
    host: `${
        DBInterface.host
    }`,
    username: `${
        DBInterface.username
    }`,
    password: `${
        DBInterface.password
    }`,
    database: `${
        DBInterface.database
    }`
});

export {
    db,
    DataTypes,
    Model
};
