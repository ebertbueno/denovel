import {Controller} from "./Controller.ts";

import User from "../Model/User.ts";

import * as dejs from "https://deno.land/x/dejs@0.8.0/mod.ts";

import {RouterContext} from "../../vendor/Denovel/Support/Facades/Request.ts";

import {validate, required, isNumber, ValidationErrors} from "https://deno.land/x/validasaur/mod.ts";

export class HomeController extends Controller { 
   /**
   * Get the input of get function
   * @param {Context}
   * @return {Context} abstract of get function
   */
    async get({request, response, params} : RouterContext) {
        await super.validate(params,{
            id: 'required|number',
            name: 'required|string'
        });
        // const [passes, errors] = await validate(params, {id: [isNumber]});

        // if (!passes) {
        //     response.body = errors;
        // } else {
        //     response.body = params.id;
        // }
    }

   /**
   * Post the input of post function
   * @param {Context}
   * @return {Context} abstract of post function
   */
    async post({request, response, params} : RouterContext) {}

   /**
   * Edit the input of edit function
   * @param {RouterContext}
   * @return {RouterContext} abstract of edit function
   */

    async edit({request, response, params} : RouterContext) {}

   /**
   * Put the input of put function
   * @param {RouterContext}
   * @return {RouterContext} abstract of put function
   */

    async put({request, response, params} : RouterContext) {}

   /**
   * Delete the input of delete function
   * @param {RouterContext}
   * @return {RouterContext} abstract of delete function
   */

    async delete({request, response, params} : RouterContext) {}
}
