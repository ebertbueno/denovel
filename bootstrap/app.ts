import { 
	Foundation,
	Server,
	Denomand
} from "../vendor/mod.ts";

import ProviderRepository from "../vendor/Foundation/ProviderRepository.ts";

import AppConfig from "../config/app.ts";

const providerRepository: any = new ProviderRepository();
const providerList = await providerRepository.getProviders(AppConfig.providers);

/*
|--------------------------------------------------------------------------
| Create The Application
|--------------------------------------------------------------------------
|
| The first thing we will do is create a new Denovel application instance
| which serves as the "glue" for all the components of Denovel, and is
| the IoC container for the system binding all of the various parts.
|
*/

const app = new Foundation;

/*
|--------------------------------------------------------------------------
| Bind Important Interfaces
|--------------------------------------------------------------------------
|
| Next, we need to bind some important interfaces into the container so
| we will be able to resolve them when needed.
|
|
*/

for(let i in providerList){
	app.singleton(providerList[i].value);
}

app.singleton(new Server);

app.singleton(new Denomand);

/* Export Foundation */

export { app };