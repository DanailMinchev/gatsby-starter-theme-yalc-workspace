<p align="center">
  <a href="https://www.gatsbyjs.com/">
    <img alt="Gatsby" src="https://www.gatsbyjs.com/Gatsby-Monogram.svg" width="64" />
  </a>
</p>
<h1 align="center">
  Starter for creating a Gatsby Theme workspace using Yalc.
</h1>

<p align="center">
  <a href="https://github.com/DanailMinchev/gatsby-starter-theme-yalc-workspace/blob/master/LICENSE">
    <img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="Project is released under the MIT license." />
  </a>
  <a href="https://github.com/DanailMinchev/gatsby-starter-theme-yalc-workspace/blob/master/CONTRIBUTING.md">
    <img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg" alt="PRs welcome!" />
  </a>
  <br />
  <a href="https://github.com/DanailMinchev/gatsby-starter-theme-yalc-workspace/actions">
    <img src="https://github.com/DanailMinchev/gatsby-starter-theme-yalc-workspace/workflows/CI/badge.svg?branch=master" alt="GitHub Actions status" />
  </a>
  <a href="https://codecov.io/gh/DanailMinchev/gatsby-starter-theme-yalc-workspace">
    <img src="https://codecov.io/gh/DanailMinchev/gatsby-starter-theme-yalc-workspace/branch/master/graph/badge.svg" alt="Codecov status" />
  </a>
  <br />
  <a href="https://github.com/prettier/prettier">
    <img src="https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square" alt="code style: prettier" />
  </a>
  <a href="https://www.conventionalcommits.org/">
    <img src="https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg" alt="Conventional Commits" />
  </a>
  <a href="https://github.com/semantic-release/semantic-release">
    <img src="https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg" alt="semantic-release" />
  </a>
</p>

## Installation

### Install dependencies

Navigate to repository root path and execute following:

```shell
npm ci

cd packages/gatsby-theme-minimal
npm ci

cd ../../examples/gatsby-starter-testing
npm ci
```

### Initialise [Yalc](https://github.com/wclr/yalc)

Navigate to repository root path and execute following:

- Navigate to `gatsby-theme-minimal` package and publish `gatsby-theme-minimal` package to local Yalc repository:

```shell
cd packages/gatsby-theme-minimal
npx yalc publish
```

- Navigate to `gatsby-starter-testing` example and add `gatsby-theme-minimal` package dependency:

```shell
cd ../../examples/gatsby-starter-testing
npx yalc add gatsby-theme-minimal
npm install
```

## Update gatsby-theme-minimal changes

Once `gatsby-theme-minimal` package is changed and you would like to test it in `gatsby-starter-testing` example,
you will need to update the dependencies and Yalc configuration.
<br />
Navigate to `gatsby-theme-minimal` package from the repository root path and publish `gatsby-theme-minimal` package with `--push` flag:

```shell
cd packages/gatsby-theme-minimal
npx yalc publish --push
```

You can use `npx yalc push` shortcut instead of `npx yalc publish --push`.
<br />

If `gatsby-theme-minimal` package changed its own dependencies you will need to execute `npm install` as well in the examples/gatsby-starter-testing:

```shell
cd ../../examples/gatsby-starter-testing
npm install --force
```

## Directory structure

### packages/gatsby-theme-minimal

The Gatsby theme is located in `packages/gatsby-theme-minimal` and it is used in the example app.

### examples/gatsby-starter-testing

The example Gatsby app which is using the Gatsby theme is located in `examples/gatsby-starter-testing`.

This example app is based on [Gatsby Testing Starter](https://github.com/DanailMinchev/gatsby-starter-testing) and
it has configured `packages/gatsby-theme-minimal` dependency using Yalc.

The `packages/gatsby-theme-minimal` dependency is stored in `.yalc` directory and it is managed by Yalc using `yalc.lock` file.

## GitHub Actions CI pipeline

This repostiory is intergared with GitHub Actions and has CI pipeline defined in [.github/workflows/ci.yml](.github/workflows/ci.yml).

## Repository configuration

### Template repository

Follow [Creating a template repository](https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/creating-a-template-repository) documentation.

Example:

![Template repository settings](./docs/assets/README/template-repository.png)

### Conventional Commits and Semantic Release

Only allow squash merging of pull requests, follow [Creating a template repository](https://docs.github.com/en/github/administering-a-repository/configuring-commit-squashing-for-pull-requests) documentation.

Example:

![Merge button settings](./docs/assets/README/merge-button.png)

Install [Semantic Pull Requests](https://github.com/apps/semantic-pull-requests) GitHub App.

#### Resources:

- [Using semantic-release with GitHub Actions](https://github.com/zeke/semantic-release-with-github-actions)
