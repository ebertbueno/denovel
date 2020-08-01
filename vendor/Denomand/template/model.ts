/**
 * Template for Middleware
 *
 * @package  Denomand
 * @author   Muhammad Fauzan <developerfauzan@asraja.com>
 */

export default function addModel(name: string): string {
  return `import {
db,
DataTypes,
Model,
} from "../../vendor/Denovel/Support/Facades/DB.ts";

class ${name} extends Model {
static table = "${name}";
static timestamps = true;

static fields = {};
}

db.link([${name}]);

export default ${name};`;
}
