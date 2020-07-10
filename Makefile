
server: 
	deno run -A --unstable server.ts

server-with: 
	deno run -A --unstable server.ts --p $(or $(port),$(p))

denomand-help:
	deno run -A denomand.ts help

controller:
	deno run -A denomand.ts controller -n $(or $(n),$(name))

middleware:
	deno run -A denomand.ts middleware -n $(or $(n),$(name))
