import {
    validate,
    required,
    isNumber,
    ValidationResult,
    ValidationErrors
} from "https://deno.land/x/validasaur/mod.ts";

import { Rule } from "https://deno.land/x/validasaur@v0.14.1/src/types.ts";

export class Controller { 
  // Promise < Array < boolean | ValidationErrors >>
    async validate(req : object, options : object): Promise < void > {
        let rules: Array < Array < string >> = [];

        for (let value of Object.entries(options)) {
            rules.push(value);
        }

        const obj = Object.fromEntries(rules);

        for (let value in obj) {
            let proxyRules: Array<Rule> = [];

            obj[value].split(/\|/g).forEach((val : string) => {
                switch (val) {
                    case "required":
                        {
                            proxyRules.push(required);
                            break;
                        }
                    case "number":
                        {
                            proxyRules.push(isNumber);
                            break;
                        }
                }
            });

            obj[value] = proxyRules;
        }

        console.log(obj);
    }
}
