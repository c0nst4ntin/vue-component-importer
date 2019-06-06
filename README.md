# vue-component-importer
A Vue.js plugin to globally import all vue components

## Requirements
1. A Vue or Nuxt installation
2. Lodash as Node dependency
## Installation

### 1) Install the package using Node

```shell
$ npm i --save vue-component-importer
```

If you don't have Lodash installed yet, also run:
```shell
$ npm i --save lodash
```

### 2a) With Vue
In your `src/main.js` file also import lodash and the vue-component-importer
```js
import lodash from 'lodash'
import importComponents from 'vue-component-importer'
```

Before the creation of your Vue instance add the following code:
```js
let components = require.context('@/components', true, /[a-zA-Z]\w+\.(vue)$/)
importComponents(lodash, Vue, components)

```
The first parameter is the folder you want to import your components from. If you just want to include some components you can change the path to just use a subdirectory of components like `@/components/slices`

Do not list the components imported by the plugin in the `components: {} `field. The HTML tag is the same as the `name:` property of the component.

### 2b) With Nuxt

Create a `plugins/componentimporter.js` file and add the following code:
```js
import Vue from 'vue'
import lodash from 'lodash'
import importComponents from 'vue-component-importer'

let components = require.context('@/components', true, /[a-zA-Z]\w+\.(vue)$/)
importComponents(lodash, Vue, components)

```
The first parameter is the folder you want to import your components from. If you just want to include some components you can change the path to just use a subdirectory of components like `@/components/slices`

Then in your `nuxt.config.js` add:
```js
plugins: [
    '~/plugins/componentimporter.js',
],
```
