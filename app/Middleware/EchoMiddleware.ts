import { Context } from "../../vendor/Denovel/Support/Facades/Request.ts";

export class EchoMiddleware {
    async handle(ctx: Context, next: any){
        console.log("Denovel Middleware");
        await next();
    }
}