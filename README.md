# ts-boilerplate
### A starter repo for open source Typescript projects. Shallow clone and go!

<!-- @todo Use `yarn rename` to replace project names in shield refences -->
[shield-licence]: https://img.shields.io/badge/License-MIT-yellow.svg
[shield-commit]: https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg
[![License: MIT][shield-licence]](https://opensource.org/licenses/MIT)
[![Conventional Commits][shield-commit]](https://conventionalcommits.org)

---

## About

This project implements TS Boilerplate architecture and dependencies.

**TS Boilerplate** provides scaffolding for development components of an open
source project. Its goal is to achieve quality from the get-go without getting
bogged down in the project setup. Covering code linting, testing, coverage,
compiling, build chain, logging, environment config, documentation, release,
deployment and versioning; It's rapid prototyping for perfectionists.

Each dependency has been selected for being mature, popular, well documented and
supported, however ultimately its a personal choice. If the stack makes sense
for you or if it's near enough but needs some evolution, please contribute a
PR or report an issue to keep this this project relevant. There's always room
for improvement.

## Prerequisites

This is a **Node.js** project, as such it requires Node to be installed.
[See Node install guides here](https://nodejs.org/en/).

We recommend [NVM](https://github.com/creationix/nvm) when working with multiple
Node.js projects, to hot-swap Node installs for project specific compatibility.

[Yarn][yarn] is used to manage module dependencies and run test and build
scripts. For those familiar with NPM, Yarn is easy to use and provides some
advantages, but it's perhaps a personal preference.

[See Yarn install guides here](https://yarnpkg.com/en/docs/install), or replace
`yarn` with `npm` in usage instructions to carry on without it.

## Usage

1. Start a new project:
    - `git clone amazebot/ts-boilerplate MY_PROJECT --depth 1`
    - Shallow clone gets a clean start without inheriting boilerplate history

1. Rename project name, author and repository:
    - `yarn rename --name "MY_PROJECT" --username "MY_USERNAME" --repo "MY_REPO" --author "Me <me@me.me>"`
    - Each of the above can be run independently, e.g. `yarn rename --repo "NEW_REPO"`
    - The `rename` script will also set a new git remote (when using `--repo`)
    <!-- @todo
      - Yarn script to `git remote set-url origin https://github.com/USERNAME/REPOSITORY.git`
      - Set package repository and author fields as provided.
    -->

1. Install dependencies with yarn:
    - `yarn`

1. Make a change:
    - -- DO SOMETHING -- <!-- @todo -->

1. Test your code:
    - `yarn test`

1. Commit changes:
    - `yarn commit`

1. Publish to git remote:
    - `yarn push`

1. Publish to NPM:
    - `yarn publish` for first version
    - `yarn release` or `yarn prerelease` for following versions

## Dependencies

[vscode]: https://code.visualstudio.com/
[tslint]: https://palantir.github.io/tslint/
[standard]: https://standardjs.com/
[mocha]: https://mochajs.org/
[chai]: http://chaijs.com/
[sinon]: http://sinonjs.org/
[wallaby]: https://wallabyjs.com/
[nyc]: https://istanbul.js.org/
[typescript]: https://www.typescriptlang.org/
[yarn]: https://yarnpkg.com/en/
[version]: https://github.com/conventional-changelog/standard-version
[yargs]: http://yargs.js.org/
[commitizen]: http://commitizen.github.io/cz-cli/
[husky]: https://www.npmjs.com/package/husky
[dotenv]: https://www.npmjs.com/package/dotenv

### Code

Some configs are included for [Visual Studio Code][vscode] to configure plugins
for lint and debug as well as [Wallaby.js][wallaby], to run tests and display
time reports and code coverage. Neither are required, the configs are just
included to make it easier for those that use them.

### Lint

[TSLint][tslint] is is an extensible static analysis tool that checks TypeScript
code for readability, maintainability, and functionality errors. It's configured
with [StandardJS][standard] to enforce consistent style in your project, fix
inconsistency and eliminate back-and-forth between reviewer & contributor.

### Test

[Mocha][mocha], [Chai][chai] and [Sinon][sinon] provide the framework for
running tests, defining assertions and mocking classes and methods
(respectively). For those with a [Wallaby][wallaby] licence, it can also run
tests immediately in your code editor and report coverage in real time.

### Coverage

[NYC][nyc] (CLI for Istanbul) instruments your code with line counters, to track
how well your unit-tests exercise your codebase. The generated **lcov** file can
be imported in by online coverage tools, but this project does not define which.

### Compile

[Typescript][typescript] is compiled to ES2015 commonjs modules. From its strict
typing, we get code intel in IDEs and access to information that is critical for
applications where modules can be extended outside the core package. Compilation
can be configured for a range of Node compatibility and module systems.

### Build

### Logging

### Debug

### Environment

### Documentation

### Release

[Standard version][version] is a replacement for `npm version` with automatic
CHANGELOG generation. It uses conventional commits (included via
[commitizen][commitizen]) to automatically bump the version in package.json
based on your commit history. It will tag a new release on the repo as well.

### Deployment

### Version
