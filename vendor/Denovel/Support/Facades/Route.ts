import { 
	Context,
	Router, 
	RouterContext
} from "./Request.ts";
import Compose from '../../../Foundation/Http/Middleware/Compose.ts';

/**
 * Denovel - A Deno Framework for Web Artisan
 *
 * @package  Denovel
 * @author   Muhammad Fauzan <developerfauzan@asraja.com>
 */

const router = new Router();
const controllerPath = Deno.cwd() + '/app/Controllers/';
const middlewarePath = Deno.cwd() + '/app/Middleware/';

class Routes {
	prefix: string = "";
	middleware: any = null;
	middlewareGroup: Array<object> = [];
	middlewareResponse: Array<any> = [];
	
	/**
	 * @param  {string} url
	 * @param  {((context:RouterContext)=>void)|string} callback
	 */
	async get(url: string, callback: ((context: RouterContext) => void) | string){
		const prefix = !this.prefix ? "" : "/" + this.prefix;
		let middlewareResponse: any = undefined;
		if(this.middleware !== null){
			middlewareResponse = await this.assignMiddleware();
		}
		
		if(typeof callback === "string"){
			let responseController = await this.Controller(callback);

			if(typeof responseController === "function"){
				if(middlewareResponse instanceof Function){
					router.get(prefix + url,middlewareResponse,responseController);
				}else{
					router.get(prefix + url,responseController);
				}		
			}else{
				if(middlewareResponse instanceof Function){
					router.get(prefix + url,middlewareResponse,(context: Context) => {
						context.response.body = responseController;
					});
				}else{
					router.get(prefix + url,(context: Context) => {
						context.response.body = responseController;
					});
				}
			}
		}else{
			if(middlewareResponse instanceof Function){
				this.View(prefix + url,middlewareResponse,"get",callback);
			}else{
				this.View(prefix + url,null,"get",callback);
			}	
		}
	}
	
	/**
	 * @param  {string} url
	 * @param  {((context:RouterContext)=>void)|string} callback
	 */
	async post(url: string, callback: ((context: RouterContext) => void) | string){
		const prefix = !this.prefix ? "" : "/" + this.prefix;
		let middlewareResponse: any = undefined;
		if(this.middleware !== null){
			middlewareResponse = await this.assignMiddleware();
		}
		
		if(typeof callback === "string"){
			let responseController = await this.Controller(callback);

			if(typeof responseController === "function"){
				if(middlewareResponse instanceof Function){
					router.post(prefix + url,middlewareResponse,responseController);
				}else{
					router.post(prefix + url,responseController);
				}		
			}else{
				if(middlewareResponse instanceof Function){
					router.post(prefix + url,middlewareResponse,(context: Context) => {
						context.response.body = responseController;
					});
				}else{
					router.post(prefix + url,(context: Context) => {
						context.response.body = responseController;
					});
				}
			}
		}else{
			if(middlewareResponse instanceof Function){
				this.View(prefix + url,middlewareResponse,"post",callback);
			}else{
				this.View(prefix + url,null,"post",callback);
			}	
		}
	}

	/**
	 * @param  {string} url
	 * @param  {((context:RouterContext)=>void)|string} callback
	 */
	async put(url: string, callback: ((context: RouterContext) => void) | string){
		const prefix = !this.prefix ? "" : "/" + this.prefix;
		let middlewareResponse: any = undefined;
		if(this.middleware !== null){
			middlewareResponse = await this.assignMiddleware();
		}
		
		if(typeof callback === "string"){
			let responseController = await this.Controller(callback);

			if(typeof responseController === "function"){
				if(middlewareResponse instanceof Function){
					router.put(prefix + url,middlewareResponse,responseController);
				}else{
					router.put(prefix + url,responseController);
				}		
			}else{
				if(middlewareResponse instanceof Function){
					router.put(prefix + url,middlewareResponse,(context: Context) => {
						context.response.body = responseController;
					});
				}else{
					router.put(prefix + url,(context: Context) => {
						context.response.body = responseController;
					});
				}
			}
		}else{
			if(middlewareResponse instanceof Function){
				this.View(prefix + url,middlewareResponse,"put",callback);
			}else{
				this.View(prefix + url,null,"put",callback);
			}	
		}
	}
  
	/**
	 * @param  {string} url
	 * @param  {((context:RouterContext)=>void)|string} callback
	 */
	async delete(url: string, callback: ((context: RouterContext) => void) | string){
		const prefix = !this.prefix ? "" : "/" + this.prefix;
		let middlewareResponse: any = undefined;
		if(this.middleware !== null){
			middlewareResponse = await this.assignMiddleware();
		}
		
		if(typeof callback === "string"){
			let responseController = await this.Controller(callback);

			if(typeof responseController === "function"){
				if(middlewareResponse instanceof Function){
					router.delete(prefix + url,middlewareResponse,responseController);
				}else{
					router.delete(prefix + url,responseController);
				}		
			}else{
				if(middlewareResponse instanceof Function){
					router.delete(prefix + url,middlewareResponse,(context: Context) => {
						context.response.body = responseController;
					});
				}else{
					router.delete(prefix + url,(context: Context) => {
						context.response.body = responseController;
					});
				}
			}
		}else{
			if(middlewareResponse instanceof Function){
				this.View(prefix + url,middlewareResponse,"delete",callback);
			}else{
				this.View(prefix + url,null,"delete",callback);
			}	
		}
	}

	/**
	 * @param  {string} url
	 * @param  {((context:RouterContext)=>void)|string} callback
	 */
	async patch(url: string, callback: ((context: RouterContext) => void) | string){
		const prefix = !this.prefix ? "" : "/" + this.prefix;
		let middlewareResponse: any = undefined;
		if(this.middleware !== null){
			middlewareResponse = await this.assignMiddleware();
		}
		
		if(typeof callback === "string"){
			let responseController = await this.Controller(callback);

			if(typeof responseController === "function"){
				if(middlewareResponse instanceof Function){
					router.patch(prefix + url,middlewareResponse,responseController);
				}else{
					router.patch(prefix + url,responseController);
				}		
			}else{
				if(middlewareResponse instanceof Function){
					router.patch(prefix + url,middlewareResponse,(context: Context) => {
						context.response.body = responseController;
					});
				}else{
					router.patch(prefix + url,(context: Context) => {
						context.response.body = responseController;
					});
				}
			}
		}else{
			if(middlewareResponse instanceof Function){
				this.View(prefix + url,middlewareResponse,"patch",callback);
			}else{
				this.View(prefix + url,null,"patch",callback);
			}	
		}
	}

	/**
	 * @param  {string} url
	 * @param  {((context:RouterContext)=>void)|string} callback
	 */
	async options(url: string, callback: ((context: RouterContext) => void) | string){
		const prefix = !this.prefix ? "" : "/" + this.prefix;
		let middlewareResponse: any = undefined;
		if(this.middleware !== null){
			middlewareResponse = await this.assignMiddleware();
		}
		
		if(typeof callback === "string"){
			let responseController = await this.Controller(callback);

			if(typeof responseController === "function"){
				if(middlewareResponse instanceof Function){
					router.options(prefix + url,middlewareResponse,responseController);
				}else{
					router.options(prefix + url,responseController);
				}		
			}else{
				if(middlewareResponse instanceof Function){
					router.options(prefix + url,middlewareResponse,(context: Context) => {
						context.response.body = responseController;
					});
				}else{
					router.options(prefix + url,(context: Context) => {
						context.response.body = responseController;
					});
				}
			}
		}else{
			if(middlewareResponse instanceof Function){
				this.View(prefix + url,middlewareResponse,"options",callback);
			}else{
				this.View(prefix + url,null,"options",callback);
			}	
		}
	}

	/**
	 * @param  {string} url
	 * @param  {((context:RouterContext)=>void)|string} callback
	 */
	async head(url: string, callback: ((context: RouterContext) => void) | string){
		const prefix = !this.prefix ? "" : "/" + this.prefix;
		let middlewareResponse: any = undefined;
		if(this.middleware !== null){
			middlewareResponse = await this.assignMiddleware();
		}
		
		if(typeof callback === "string"){
			let responseController = await this.Controller(callback);

			if(typeof responseController === "function"){
				if(middlewareResponse instanceof Function){
					router.head(prefix + url,middlewareResponse,responseController);
				}else{
					router.head(prefix + url,responseController);
				}		
			}else{
				if(middlewareResponse instanceof Function){
					router.head(prefix + url,middlewareResponse,(context: Context) => {
						context.response.body = responseController;
					});
				}else{
					router.head(prefix + url,(context: Context) => {
						context.response.body = responseController;
					});
				}
			}
		}else{
			if(middlewareResponse instanceof Function){
				this.View(prefix + url,middlewareResponse,"head",callback);
			}else{
				this.View(prefix + url,null,"head",callback);
			}	
		}
	}

	/**
	 * @param  {string} name
	 */
	async Middleware (name: string){
		let nameArgs: any = name.toString().split(',');
		if(nameArgs.length === 1){
			nameArgs = nameArgs[0];
		}
		let importedArray = [];
		let filePath;
		if(Array.isArray(nameArgs)){
			for(let i of nameArgs){
				filePath = middlewarePath + i + '.ts';

				let checkFile = await this.exists(filePath);

				if (checkFile) {
					let importedController = await import("file://" + filePath);
					let controller = new importedController[i];
		
					importedArray.push(await controller['handle']);
				}
			}

			return importedArray;
		}else{
			filePath = middlewarePath + nameArgs + '.ts';
		
			let checkFile = await this.exists(filePath);
	
			if (checkFile) {
				let importedController = await import("file://" + filePath);
				let controller = new importedController[nameArgs];
	
				return await controller['handle'];
			}
		}
	}

	async loopMid(middleware: Array<string>): Promise<any>{
		for(let u = 0; u < middleware.length; u++){
			return await this.Middleware(middleware.toString());
		}	
	}
	
	async assignMiddleware (): Promise<any>{
		let middleware;
		let middlewareResponse;
		
		if(this.middleware instanceof Array){	
			let arrayOfMiddleware = await this.loopMid(this.middleware);
			if(Array.isArray(arrayOfMiddleware)){
				return Compose(arrayOfMiddleware);
			}else{
				return Compose([arrayOfMiddleware]);
			}
		}else{
			middleware = !this.middleware ? "" : this.middleware;
			middlewareResponse = await this.Middleware(middleware);

			return middlewareResponse;
		}
	}
	
	/**
	 * @param  {string} path
	 */
	async Controller (path: string){
		let controllerName = path.split("@")[0];
		let methodName = path.split("@")[1];
		let filePath = controllerPath + controllerName + '.ts';

        let checkFile = await this.exists(filePath);
        if (checkFile) {
	        let importedController = await import('file:///' + filePath);

	        let controller = new importedController[controllerName]();
	        
	        return controller[methodName];
        }else{
        	return "Server Error";
        }
	}
	
	/**
	 * @param  {string} url
	 * @param  {any} middlewareResponse
	 * @param  {string} method
	 * @param  {any} callback
	 */
	View (url: string, middlewareResponse: any, method: string, callback: any){
		if(method == "get"){
			if(middlewareResponse != null){
				router.get(url,middlewareResponse,(context: RouterContext) => {
					let content = callback(context);
					if(this.isPromise(content)){
						content.then((result: any) => {
							if(typeof result !== "undefined"){
								context.response.body = result;
							}else{
								callback(context);
							}							
						})
					}else{
						if(typeof content !== "undefined"){
							context.response.body = content;
						}else{
							callback(context);
						}					
					}
				});
			}else{
				router.get(url,(context: RouterContext) => {
					let content = callback(context);
					if(this.isPromise(content)){
						content.then((result: any) => {
							if(typeof result !== "undefined"){
								context.response.body = result;
							}else{
								callback(context);
							}							
						})
					}else{
						if(typeof content !== "undefined"){
							context.response.body = content;
						}else{
							callback(context);
						}					
					}
				});				
			}
		}else if(method == "post"){
			if(middlewareResponse != null){
				router.post(url,middlewareResponse,(context: RouterContext) => {
					let content = callback(context);
					if(this.isPromise(content)){
						content.then((result: any) => {
							if(typeof result !== "undefined"){
								context.response.body = result;
							}else{
								callback(context);
							}							
						})
					}else{
						if(typeof content !== "undefined"){
							context.response.body = content;
						}else{
							callback(context);
						}					
					}
				});
			}else{
				router.post(url,(context: RouterContext) => {
					let content = callback(context);
					if(this.isPromise(content)){
						content.then((result: any) => {
							if(typeof result !== "undefined"){
								context.response.body = result;
							}else{
								callback(context);
							}							
						})
					}else{
						if(typeof content !== "undefined"){
							context.response.body = content;
						}else{
							callback(context);
						}					
					}
				});				
			}
		}else if(method == "put"){
			if(middlewareResponse != null){
				router.put(url,middlewareResponse,(context: RouterContext) => {
					let content = callback(context);
					if(this.isPromise(content)){
						content.then((result: any) => {
							if(typeof result !== "undefined"){
								context.response.body = result;
							}else{
								callback(context);
							}							
						})
					}else{
						if(typeof content !== "undefined"){
							context.response.body = content;
						}else{
							callback(context);
						}					
					}
				});
			}else{
				router.put(url,(context: RouterContext) => {
					let content = callback(context);
					if(this.isPromise(content)){
						content.then((result: any) => {
							if(typeof result !== "undefined"){
								context.response.body = result;
							}else{
								callback(context);
							}							
						})
					}else{
						if(typeof content !== "undefined"){
							context.response.body = content;
						}else{
							callback(context);
						}					
					}
				});				
			}
		}else if(method == "delete"){
			if(middlewareResponse != null){
				router.delete(url,middlewareResponse,(context: RouterContext) => {
					let content = callback(context);
					if(this.isPromise(content)){
						content.then((result: any) => {
							if(typeof result !== "undefined"){
								context.response.body = result;
							}else{
								callback(context);
							}							
						})
					}else{
						if(typeof content !== "undefined"){
							context.response.body = content;
						}else{
							callback(context);
						}					
					}
				});
			}else{
				router.delete(url,(context: RouterContext) => {
					let content = callback(context);
					if(this.isPromise(content)){
						content.then((result: any) => {
							if(typeof result !== "undefined"){
								context.response.body = result;
							}else{
								callback(context);
							}							
						})
					}else{
						if(typeof content !== "undefined"){
							context.response.body = content;
						}else{
							callback(context);
						}					
					}
				});				
			}	
		}	
	}
	
	getUnique(arr: Array<object>, comp: string): any {
		const uniqueArray = arr.filter((object,index) => {
			return index === arr.findIndex((obj: any) => {
				return JSON.stringify(obj) === JSON.stringify(object)
			});
		});
			
		return uniqueArray;
	}

	/**
	 * @param  {string} filename
	 * @returns Promise
	 */
	async exists (filename: string): Promise<boolean> {
	  try {
	    await Deno.stat(filename);

	    return true;
	  } catch (error) {
	    if (error instanceof Deno.errors.NotFound) {
	      return false;
	    } else {
	      throw error;
	    }
	  }
	}
	
	/**
	 * @param  {any} object
	 */
	isPromise(object: any){
	  if(Promise && Promise.resolve){
	    return Promise.resolve(object) == object;
	  }else{
	    throw "Promise not supported in your environment"
	  }
	}

	/**
	 * @param  {any} args
	 * @param  {any} route
	 */
	group(args: any,route: any){ 
		this.prefix = args.prefix;
		this.middleware = null;
		if(Array.isArray(args.middleware)){
			this.middleware = [];
			this.middleware.push(args.middleware);
		}else{
			this.middleware = '';
			this.middleware = args.middleware;
		}

		route();
	}
}

const Route = new Routes();

export {
	router,
	Route
}