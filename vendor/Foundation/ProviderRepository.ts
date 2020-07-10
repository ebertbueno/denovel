import {
	error,
} from "https://deno.land/x/colorlog/mod.ts";


export default class ProviderRepository {
    protected purpose: Array<object> = [];
    private providerPath: string = Deno.cwd() + "/app/Providers/";

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

    async getProviders(providers: Array<string>){
        for(let providerName of providers){
            let filePath = this.providerPath + providerName + '.ts';
        
            let checkFile = await this.exists(filePath);
        
            if (checkFile) {
                let importedController = await import("file://" + filePath);
                let provider = new importedController[providerName]();
        
                this.purpose.push({
                    name: provider.constructor.name,
                    value: provider
                });
            }else{
                console.log(error("Provider " + providerName + " doesn't exist!"))
            }
        }

        return this.purpose;
    }
}