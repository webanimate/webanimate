# Webanimate

[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![](https://img.shields.io/npm/v/webanimate.svg)](https://www.npmjs.com/package/webanimate)
[![](https://img.shields.io/bundlephobia/minzip/webanimate.svg)](https://bundlephobia.com/result?p=webanimate)

Use Web Animations API easier.

This is alpha. Please don't use it. Stable version coming very soon.

## Install

```
$ yarn add webanimate
```

or

```
$ npm install webanimate
```

## Usage

Import:

```javascript
import webanimate from 'webanimate'
```

Or load from CDN:

```html
<script src="https://cdn.jsdelivr.net/npm/webanimate@latest/dist/webanimate.js"></script>
```

options as listed [here](https://developer.mozilla.org/en-US/docs/Web/API/Element/animate) plus 2 additional options:

- `play` (Boolean) - whether to play animation after creation or not
- `all` (Boolean) - whether to use `querySelector` or `querySelectorAll`.
  If `false` passes selectors to `document.querySelector` and returns single animation or `null`, if `true` to `querySelectorAll`, returns `Array` of animations or `null`
