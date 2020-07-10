import {
    createHttpError,
    isErrorStatus,
} from "../deps.ts";

import {
    error,
  } from "https://deno.land/x/colorlog/mod.ts";

export default class ExceptionHandler {

   /**
    *
    *
    * @param {number} exception
    * @memberof Handler
    */
   report(exception: number): void{
       if(isErrorStatus(exception)) console.log(error("Denovel - " + createHttpError(exception)));
   }

   /**
    *
    *
    * @param {*} request
    * @param {number} exception
    * @memberof Handler
    */
   render(request: any,exception: number): void{
        request.throw(exception);
   }
}