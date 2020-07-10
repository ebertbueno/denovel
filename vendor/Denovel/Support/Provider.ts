import { 
	Foundation
} from "../../../vendor/mod.ts";

declare global {
    interface Window {
        Log: any;
    }
}

export default class ServiceProvider {
    protected app: any;
    protected log: any;

    constructor(){
        this.app = new Foundation();
    }
}