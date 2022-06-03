# taste-nx
Have a taste of [Nx](https://nx.dev/)

## History

* Create workspace via [create-nx-workspace](https://nx.dev/cli/create-nx-workspace)
  * `pnpx create-nx-workspace@latest --ci=github --cli=nx --defaultBase=master --name=taste-nx  --nxCloud=true --packageManager=pnpm --preset=app`
  * copy files `rsync -av ./taste-nx/ ./ --exclude=README.md`
  * move Nx Cloud accessToken from `nx.json` to `nx-cloud.env`
    * `NX_CLOUD_AUTH_TOKEN=<token>`
* Create `simple` package and `complex` package
  * Add `nx` & `nx g` to pnpm scripts
  * `pnpm g npm-package simple`
  * `pnpm g npm-package complex`
  * Import `@taste-nx/simple` in `complex`
  * Run `pnpm test complex` and it should fail
  * Add `pnpm-workspace.yaml`
  * `pnpm add @taste-nx/simple --dir libs/complex`
  * Run `pnpm test complex` and it should pass
  * Run `pnpm nx graph` to check workspace structure
* Create `hello-tsc` and `hello-swc` package
  * `pnpm add -w -D @nrwl/js`
  * `pnpm g @nrwl/js:library --name=hello-tsc --buildable --config=npm-scripts`
  * `pnpm g @nrwl/js:library --name=hello-swc --compiler=swc --buildable --config=npm-scripts`
  * Run `pnpm build hello-tsc` and it should build
  * Run `pnpm build hello-swc` and it should build
  * **NOTE** `--config=npm-scripts` only works for libs
* Create `demo-node-app` and `demo-web-app`
  * `pnpm add -w -D @nrwl/node @nrwl/web`
  * `pnpm g @nrwl/node:app demo-node-app`
  * `pnpm g @nrwl/web:app demo-web-app`
  * `pnpm add -w -D @babel/core@">=7.8.0 <8.0.0" @babel/preset-env@^7.0.0 babel-loader@^8.0.2 webpack@">=5.0.0 <6.0.0"`
  * Then `pnpm i` should no longer complain about missing peer dependencies
  * Try `pnpm start demo-node-app`
  * Try `pnpm start demo-web-app`

---
# TasteNx

This project was generated using [Nx](https://nx.dev).

<p style="text-align: center;"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-logo.png" width="450"></p>

🔎 **Smart, Fast and Extensible Build System**

## Adding capabilities to your workspace

Nx supports many plugins which add capabilities for developing different types of applications and different tools.

These capabilities include generating applications, libraries, etc as well as the devtools to test, and build projects as well.

Below are our core plugins:

- [React](https://reactjs.org)
  - `npm install --save-dev @nrwl/react`
- Web (no framework frontends)
  - `npm install --save-dev @nrwl/web`
- [Angular](https://angular.io)
  - `npm install --save-dev @nrwl/angular`
- [Nest](https://nestjs.com)
  - `npm install --save-dev @nrwl/nest`
- [Express](https://expressjs.com)
  - `npm install --save-dev @nrwl/express`
- [Node](https://nodejs.org)
  - `npm install --save-dev @nrwl/node`

There are also many [community plugins](https://nx.dev/community) you could add.

## Generate an application

Run `nx g @nrwl/react:app my-app` to generate an application.

> You can use any of the plugins above to generate applications as well.

When using Nx, you can create multiple applications and libraries in the same workspace.

## Generate a library

Run `nx g @nrwl/react:lib my-lib` to generate a library.

> You can also use any of the plugins above to generate libraries as well.

Libraries are shareable across libraries and applications. They can be imported from `@taste-nx/mylib`.

## Development server

Run `nx serve my-app` for a dev server. Navigate to http://localhost:4200/. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `nx g @nrwl/react:component my-component --project=my-app` to generate a new component.

## Build

Run `nx build my-app` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `nx test my-app` to execute the unit tests via [Jest](https://jestjs.io).

Run `nx affected:test` to execute the unit tests affected by a change.

## Running end-to-end tests

Run `nx e2e my-app` to execute the end-to-end tests via [Cypress](https://www.cypress.io).

Run `nx affected:e2e` to execute the end-to-end tests affected by a change.

## Understand your workspace

Run `nx graph` to see a diagram of the dependencies of your projects.

## Further help

Visit the [Nx Documentation](https://nx.dev) to learn more.



## ☁ Nx Cloud

### Distributed Computation Caching & Distributed Task Execution

<p style="text-align: center;"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-cloud-card.png"></p>

Nx Cloud pairs with Nx in order to enable you to build and test code more rapidly, by up to 10 times. Even teams that are new to Nx can connect to Nx Cloud and start saving time instantly.

Teams using Nx gain the advantage of building full-stack applications with their preferred framework alongside Nx’s advanced code generation and project dependency graph, plus a unified experience for both frontend and backend developers.

Visit [Nx Cloud](https://nx.app/) to learn more.
