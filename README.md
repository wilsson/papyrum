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

Papyrum is a tool that will help you in the creation of your design system, style guide or in the documentation of your project based on `react`

### Features

- Zero config
- [MDX based](https://mdxjs.com/), builds documentation with the markdown of the component era.
- Typescript support
- Syntax highlighting with [Prism React Renderer](https://github.com/FormidableLabs/prism-react-renderer).

<p align="center">
  <img src="https://user-images.githubusercontent.com/4754339/71502918-d5e82400-2840-11ea-9165-3643711ca8d2.png" />
</p>

### Installation

```bash
yarn add @papyrum/cli
```

> You need react y react-dom with 16.8.6 installed.

### Usage

Add the following to your  `package.json`

```json
{
  "name": "my_project",
  "scripts": {
    "dev": "papyrum dev",
    "build": "papyrum build"
  }
}
```

Hello world with papyrum, create one file `.mdx`

```
---
route: /
name: Hello world
---

# Hi!
___

Hello world with mdx
```

execute

```bash
yarn dev
```

<p align="center">
  <img src="https://user-images.githubusercontent.com/4754339/71502938-f2845c00-2840-11ea-9dec-1d9ea8b37778.png" />
</p>

### Examples

- [Basic](https://github.com/wilsson/papyrum/tree/master/examples/basic)
- [With typescript](https://github.com/wilsson/papyrum/tree/master/examples/typescript)