# vue-component-importer
A Vue.js plugin to globally import all vue components

## Requirements
1. A Vue or Nuxt installation

## Installation

### 1) Install the package using Node

```shell
$ npm i --save vue-component-importer
```

### 2a) With Vue
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

Do not list the components imported by the plugin in the `components: {} `field. The HTML tag is the same as the `name:` property of the component.

### 2b) With Nuxt

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
