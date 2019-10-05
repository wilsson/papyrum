# Contributing

### Getting started

Fork the project on Github and clone the project from the fork

## Setup

### Pre-requisites

- *Node:* `10.16.0` or higher
- *Yarn:* `1.17.0` or higher

### Starting the project

```
yarn install
yarn build
yarn bs
```

### Development server and watching

This command will start the development server with the basic example and watching changes in all packages

```
yarn dev
```

Go to `http://localhost:4000/` you will see the [basic example](https://github.com/wilsson/papyrum/tree/master/examples/basic)

### Packages

#### **[papyrum-cli](https://github.com/wilsson/papyrum/tree/master/packages/papyrum-cli)**

Command line logic and root root component.

#### **[papyrum-core](https://github.com/wilsson/papyrum/tree/master/packages/papyrum-core)**

Compilation logic, development server, mdx reading.

#### **[papyrum-ui-docs](https://github.com/wilsson/papyrum/tree/master/packages/papyrum-ui-docs)**

Ccomponents that help document better with `papyrum`.

#### **[papyrum-ui](https://github.com/wilsson/papyrum/tree/master/packages/papyrum-ui)**

Components used by the papyrum tool, toolbar, sidebar, h1, h2 for content mdx, etc.

### Commit messages

Confirmation messages must follow the following [convention](https://www.conventionalcommits.org/en/v1.0.0-beta.4/)

### Pull Requests

- All extraction requests must be sent to the branch `dev`
- Be sure to work in the `src` folder and not in the `dist`


### New Feature

First create an issue and explain the new feature once it is approved you can start working on it

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://twitter.com/wilsson83"><img src="https://avatars3.githubusercontent.com/u/4754339?v=4" width="100px;" alt="Wilson FT"/><br /><sub><b>Wilson FT</b></sub></a><br /><a href="https://github.com/wilsson/papyrum/commits?author=wilsson" title="Code">💻</a> <a href="https://github.com/wilsson/papyrum/commits?author=wilsson" title="Documentation">📖</a> <a href="#review-wilsson" title="Reviewed Pull Requests">👀</a> <a href="#design-wilsson" title="Design">🎨</a></td>
  </tr>
</table>

<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!