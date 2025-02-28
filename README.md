# PatternFly Elements [![Netlify status](https://api.netlify.com/api/v1/badges/bf40e3e7-4f98-4088-91d9-112dbe8a1872/deploy-status)](https://patternfly-elements.netlify.app) ![build status](https://img.shields.io/github/workflow/status/patternfly/patternfly-elements/Build%20&%20test/master) ![commit](https://badgen.net/github/last-commit/patternfly/patternfly-elements) ![latest version](https://img.shields.io/github/lerna-json/v/patternfly/patternfly-elements?label=version) ![contributors](https://img.shields.io/github/contributors/patternfly/patternfly-elements)

## Table of Contents

1. [Getting started][getting-started]
2. [Element catalog][catalog]
3. [Creating components][creating]
4. [Theming components][theming]

[PatternFly Elements][pfe-home] is a work-in-progress collection of flexible and lightweight Web Components based on the Unified Design Kit. The repo also includes a generator to build new components. PatternFly Elements are:

- **Lightweight**: small file size, minimal boilerplate, no "framework-like" features.
- **Universal**: write once, use everywhere. PatternFly Elements work in React, Vue, Angular, vanilla JS, anywhere HTML elements are used.
- **Themable**: Make overrides as needed via attributes or CSS variables

The result of these principles is that you can plug one set of components into a wide variety of applications; bringing UX consistency and developer familiarity to any web project.

A Yeoman generator is included for creating web components that meet these goals.

## Quick start
```
git clone git@github.com:patternfly/patternfly-elements.git
cd patternfly-elements
npm install # this will take a while due to lerna bootstrap
npm run dev -- --storybook --docs # This will build and spin up a local server with storybook preview and documentation
```

### Additional dependencies

#### Hub

If you will be doing any release work, it is recommended that you install Hub.

To install on a MacOS: `brew install hub`.

For other systems, please see documentation:
    - [Hub](https://hub.github.com/)

_Note: You will need to use [Node](https://nodejs.org/en/) v12 or higher._

#### nvm

Building PatternFly Elements requires specific versions of Node.js.  To automate usage of the correct version, it is recommended that contributors install [nvm](https://github.com/nvm-sh/nvm#readme) as well an automatic version switcher like [avn](https://github.com/wbyoung/avn) or [shell-specific nvm integration](https://github.com/nvm-sh/nvm#deeper-shell-integration).  With those installed, your terminal will automatically switch to the correct Node.js version when you `cd` into the PatternFly Elements repository.

## Command Line Helper Scripts
Many commands have an optional argument of space-separated component name(s), if left off it will assume it should run on all components. These should run from the project root.

### Compile

```shell
# Build all components
npm run build

# Build one or more components
npm run build [component-name(s)]
```

The build command can accept a few flags; for more details, use `npm run build -- --help`.

### Preview

```shell
# Runs server process to preview files (does not build)
npm start

# Builds, sets up the watch, and runs server process to preview files
npm run dev [component-name(s)]
```

### Testing

#### ✨ New tests ([Web Test Runner](https://modern-web.dev/docs/test-runner/overview/))

```shell
# Run all tests in watch mode.
npm run test:watch

# Run a single test in watch mode.
npm run test:watch --element="pfe-select"
# Or multiple:
npm run test:watch --element="{pfe-select,pfe-card}"

# Run all tests using a React wrapper in watch mode.
npm run test:watch --group="with-react"

# Run all tests using a Vue wrapper in watch mode.
npm run test:watch --group="with-vue"

# Build all elements then run all tests in "watch" mode.
npm run test:build:watch

# Build specific elements then run those tests in "watch" mode.
npm run test:build:watch --element="pfe-select"
# Or multiple:
npm run test:build:watch --element="{pfe-select,pfe-card}"

# Run all tests with and without React and Vue wrappers.
# This is run on pull request within CI.
npm run test:ci
```

Generate a new test file for an existing element by using:

```shell
npm run new:test -- [name-of-element]

# Example:
npm run new:test -- pfe-tabs
```

#### 🕸 Legacy tests ([Web Component Tester](https://github.com/Polymer/web-component-tester))

```shell
# Build and run tests on all components
npm run test

# Build and run tests on one component
npm run test [component-name(s)]

# Run tests on one component without rebuilding
npm run test [component-name(s)] -- --nobuild
```

The test command can accept a flags; for more details, use `npm run test -- --help`.

### Open a new pull request

```shell
# Open a new pull request
npm run pr
```

### Documentation site
View the documentation locally
```shell
npm run start:docs
```

Build the documentation site
```shell
npm run build:docs
```

## Support

Though we have tested and verified general usability within these frameworks, PatternFly Elements makes no guarantees about compatibility within specific sites and applications. Please test accordingly.


## Stay informed

Sign up for the for the [active project participation email list](https://www.redhat.com/mailman/listinfo/patternfly-elements-contribute) and/or the [informed email list](https://www.redhat.com/mailman/listinfo/patternfly-elements-announce).

You can also participate in discussions on [patternfly.slack.com](https://patternfly.slack.com) in the #patternfly-elements channel.

---

[home][pfe-home] |
[start][getting-started] |
[develop][creating] |
[theming][theming] |
[storybook][catalog] |
[web components][wc-org]


[pfe-home]: https://patternflyelements.org
[getting-started]: https://patternflyelements.org/get-started
[catalog]: https://patternflyelements.org/components
[creating]: https://patternflyelements.org/docs/develop/create/
[theming]: https://patternflyelements.org/theming/
[wc-org]: https://webcomponents.org

[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat)](https://github.com/prettier/prettier) [![tested with webdriver.io](https://img.shields.io/badge/tested%20with-webdriver.io-%23ea5906)](https://webdriver.io/)
