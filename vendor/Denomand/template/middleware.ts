/**
 * Template for Middleware
 *
 * @package  Denomand
 * @author   Muhammad Fauzan <developerfauzan@asraja.com>
 */

export default function addMiddleware(name: string): string{

    return `import { Context } from "../../vendor/Denovel/Support/Facades/Request.ts";

export class ${name} {
    async handle(ctx: Context, next: any){
        console.log("Denovel Middleware");
        await next();
    }
}`;
    
}
    