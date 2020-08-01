import args from "https://deno.land/x/args@2.0.0/wrapper.ts";
import { Option } from "https://deno.land/x/args@2.0.0/flag-types.ts";
import { Text } from "https://deno.land/x/args@2.0.0/value-types.ts";
import {
  PARSE_FAILURE,
  MAIN_COMMAND,
} from "https://deno.land/x/args@2.0.0/symbols.ts";
import pascalCase from "https://deno.land/x/case/pascalCase.ts";
import addController from "./template/controller.ts";
import addMiddleware from "./template/middleware.ts";
import addModel from "./template/model.ts";
import { success } from "https://deno.land/x/colorlog/mod.ts";

export class Denomand {
  command() {
    const parser = args
      .describe("Create middleware and controller as a service")
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
      );

    const res = parser.parse(Deno.args);

    function help(cmdPath: readonly string[] = []) {
      if (!cmdPath.length) {
        console.log(success("USAGE:"));
        console.log(success("  <program> help [command]"));
        console.log(success("  <program> controller --name <controller-name>"));
        console.log(success("  <program> middleware --name <middleware-name>"));
        console.log(success("  <program> model --name <middleware-name>"));
      }
      console.log(success(parser.help(...cmdPath)));
    }

    switch (res.tag) {
      case PARSE_FAILURE:
        console.error(res.error.toString());
        Deno.exit(1);
      case MAIN_COMMAND: {
        const remaining = res.remaining().rawValues();
        if (remaining.length) {
          console.error(`Invalid subcommand: ${remaining[0]}`);
        } else {
          console.error("Missing subcommand");
        }
        help();
        Deno.exit(1);
      }
      case "help":
        help(res.remaining().rawValues());
        break;
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
    }
  }
}
