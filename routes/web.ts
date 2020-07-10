import { Route,router } from "../vendor/Denovel/Support/Facades/Route.ts";
import { RouterContext,REDIRECT_BACK } from "../vendor/Denovel/Support/Facades/Request.ts";

Route.get('/','HomeController@get');

Route.group({
	prefix: 'denovel',
	middleware: ['EchoMiddleware']
},() => {
	Route.get('/about',() => { 
		return "Detail";
	});
});

export { router }