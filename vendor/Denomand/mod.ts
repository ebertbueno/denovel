import args from "https://raw.githubusercontent.com/KSXGitHub/deno-args/2.0.4/lib/wrapper.ts";
import { Option } from "https://raw.githubusercontent.com/KSXGitHub/deno-args/2.0.5/lib/flag-types.ts";
import { Text } from "https://raw.githubusercontent.com/KSXGitHub/deno-args/2.0.5/lib/value-types.ts";
import {
  PARSE_FAILURE,
  MAIN_COMMAND,
} from "https://deno.land/x/args@2.0.7/symbols.ts";

import pascalCase from "https://deno.land/x/case/pascalCase.ts";

import addController from "./template/controller.ts";
import addMiddleware from "./template/middleware.ts";
import addModel from "./template/model.ts";
import addProvider from "./template/provider.ts";

import { success } from "https://deno.land/x/colorlog/mod.ts";


export class Denomand {
  command() {
    const parser = args
      .describe("Denomand is Official Denovel Command Automation Tools")
      .sub("help", args.describe("Show help"))
      .sub(
        "controller",
        args.describe("Controller as a service").with(
          Option("name", {
            type: Text,
            alias: ["n"],
          })
        )
      )
      .sub(
        "middleware",
        args.describe("Middleware as a service").with(
          Option("name", {
            type: Text,
            alias: ["n"],
          })
        )
      )
      .sub(
        "model",
        args.describe("Model as a service").with(
          Option("name", {
            type: Text,
            alias: ["n"],
          })
        )
      )
      .sub(
        "provider",
        args.describe("Provider as a service").with(
          Option("name", {
            type: Text,
            alias: ["n"],
          })
        )
      );

    const res = parser.parse(Deno.args);

    function help(cmdPath: readonly string[] = []) {
      if (!cmdPath.length) {
        console.log(success("USAGE:"));
        console.log(success("  <program> help [command]"));
        console.log(success("  <program> controller --name <controller-name>"));
        console.log(success("  <program> middleware --name <middleware-name>"));
        console.log(success("  <program> model --name <model-name>"));
        console.log(success("  <program> provider --name <provider-name>"));
      }
      console.log(success(parser.help(...cmdPath)));
    }

    switch (res.tag) {
      case "help": {
        help(res.remaining().rawValues());
        break;
      }
      case "controller": {
        const { name } = res.value.value;

        (async () => {
          const encoder = new TextEncoder();
          const data = encoder.encode(addController(pascalCase(name)));
          await Deno.writeFile(`app/Controllers/${pascalCase(name)}.ts`, data);
        })();

        console.log(success("Controller added successfully"));
        break;
      }
      case "middleware": {
        const { name } = res.value.value;

        (async () => {
          const encoder = new TextEncoder();
          const data = encoder.encode(addMiddleware(pascalCase(name)));
          await Deno.writeFile(`app/Middleware/${pascalCase(name)}.ts`, data);
        })();

        console.log(success("Middleware added successfully"));
        break;
      }
      case "model": {
        const { name } = res.value.value;

        (async () => {
          const encoder = new TextEncoder();
          const data = encoder.encode(addModel(pascalCase(name)));
          await Deno.writeFile(`app/Model/${pascalCase(name)}.ts`, data);
        })();

        console.log(success("Model added successfully"));
        break;
      }
      case "provider": {
        const { name } = res.value.value;

        (async () => {
          const encoder = new TextEncoder();
          const data = encoder.encode(addProvider(`${pascalCase(name)}ServicesProvider`));
          await Deno.writeFile(`app/Providers/${pascalCase(name)}ServicesProvider.ts`, data);
        })();

        console.log(success("Provider added successfully"));
        break;
      }
      default: {
        console.error("No command found!");
        Deno.exit(1);
      }
    }
  }
}
