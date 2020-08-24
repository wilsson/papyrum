<p align="center">
  <img src="https://user-images.githubusercontent.com/4754339/71502967-1a73bf80-2841-11ea-9add-13cd5bd905dd.png" />
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/@papyrum/cli" target="_blank">
    <img src="https://badgen.net/npm/v/@papyrum/cli" alt="">
  </a>
  <a href="https://www.npmjs.com/package/@papyrum/cli" target="_blank">
    <img src="https://badgen.net/npm/dt/@papyrum/cli" alt="">
  </a>
  <a href="LICENSE" target="_blank">
    <img src="https://badgen.net/npm/license/@papyrum/cli" alt="">
  </a>
</p>

[Papyrum](https://papyrum.site/) is a tool that will help you document your design system or library of components based on [React](https://reactjs.org/).

## Features

- Zero config
- [MDX based](https://mdxjs.com/), builds documentation with the markdown of the component era.
- Typescript support
- Syntax highlighting with [Prism React Renderer](https://github.com/FormidableLabs/prism-react-renderer).

<p align="center">
  <img src="https://user-images.githubusercontent.com/4754339/91013125-d80ba980-e5ac-11ea-805d-0361ece616cd.png" />
</p>

## Start a new project

Papyrum brings with it a command that will help you build your project based on templates.

```bash
npx @papyrum/cli new [name] [template]
```

For example:

```bash
npx @papyrum/cli new my-website basic

```

| Template | Description |
| ------------- | ------------- |
| `basic` | Basic template |
| `typescript` | Basic template with typescript |

### Project structure

```
my-website
├── docs
│   ├── Introduction.mdx
│   └── Button.mdx
├── src
│   └── components
├── static
│   └── img
│       ├── favicon.ico
│       └── logo.svg
├── package.json
├── .editorconfig
├── papyrum.config.js
└── yarn.lock
```

### Structure summary

- `docs` : Folder where our `.mdx` documentation files are hosted.
- `src` : Ffolder where the components to be built are stored, in the case of building a component library.
- `static` : Default place where static files will be served.
- `papyrum.config.js` : Papyrum settings.

Now execute this command to be able to raise a development server that will listen to your changes as you develop.

```
yarn dev
```

or

```
npm run dev
```

## Add Papyrum to an existing project

You just need to install the command line tool:

```
yarn add @papyrum/cli
```

or

```
npm install @papyrum/cli
```

Then create an `.mdx` file:

```
---
route: /
name: Hello world
---

# Hi!
___

Hello world with mdx
```

Finally run:

```
yarn dev
```

or

```
npm run dev
```

## Examples

- [Basic](https://github.com/wilsson/papyrum/tree/master/examples/basic)
- [With typescript](https://github.com/wilsson/papyrum/tree/master/examples/typescript)

If you have any suggestion of a feature or feedback please do not hesitate to create a [issue](https://github.com/wilsson/papyrum/issues).