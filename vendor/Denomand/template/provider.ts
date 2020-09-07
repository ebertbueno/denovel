/**
 * Template for Middleware
 *
 * @package  Denomand
 * @author   Muhammad Fauzan <developerfauzan@asraja.com>
 */

export default function addProvider(name : string): string {
    return `import ServiceProvider from "../../vendor/Denovel/Support/Provider.ts";

export class ${name} extends ServiceProvider {
    register(){

    }

    boot(){

    }
}`;
}
