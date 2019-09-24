<h2 align="center">vue-component-importer</h2>

<p align="center">
  <a href="https://github.com/ConstantinRoss/vue-component-importer/blob/master/LICENSE.md">
    <img alt="License" src="https://img.shields.io/github/license/ConstantinRoss/vue-component-importer.svg">
  </a>
  <a href="https://img.shields.io/github/package-json/v/ConstantinRoss/vue-component-importer">
    <img src="https://img.shields.io/github/package-json/v/ConstantinRoss/vue-component-importer">
  </a>
  <a href="https://img.shields.io/npm/dm/vue-component-importer.svg">
    <img src="https://img.shields.io/npm/dm/vue-component-importer.svg">
</a>
</p>

<p align="center">
  <em>
  Globally import all Vue Components
  </em>
</p>

This Vue.js Plugin will import all your Vue.js Components from a certain directory, enabling you to build a fully modular frontend for your headless CMS.

## Getting Started

### Requirements
* Please make sure you have working Vue or Nuxt installation running.

### Installation

#### 1) Install the package using Node

```shell
$ npm i --save vue-component-importer
```

#### 2a) With Vue
In your `src/main.js` file also import the vue-component-importer
```js
import importComponents from 'vue-component-importer'
```

Before the creation of your Vue instance add the following code:
```js
let components = require.context('@/components', true, /[a-zA-Z]\w+\.(vue)$/)
importComponents(Vue, components)

```
The first parameter is the folder you want to import your components from. If you just want to include some components you can change the path to just use a subdirectory of components like `@/components/slices`

#### 2b) With Nuxt
Create a `plugins/componentimporter.js` file and add the following code:
```js
import Vue from 'vue'
import importComponents from 'vue-component-importer'

let components = require.context('@/components', true, /[a-zA-Z]\w+\.(vue)$/)
importComponents(Vue, components)

```
The first parameter is the folder you want to import your components from. If you just want to include some components you can change the path to just use a subdirectory of components like `@/components/slices`

Then in your `nuxt.config.js` add:
```js
plugins: [
    '~/plugins/componentimporter.js',
],
```

### How To Use
The first parameter is the folder you want to import your components from. If you just want to include some components you can change the path to just use a subdirectory of components like `@/components/slices`

As all components in the given directory are imported globally you must not list the components imported by the plugin in the `components: {} `field. The HTML tag is the same as the `name:` property of the component.
