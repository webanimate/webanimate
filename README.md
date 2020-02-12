# webanimate
[Animate.css](https://github.com/daneden/animate.css) animations ported to Web Animations API.

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
* `play` (Boolean) - whether to play animation after creation or not 
 * `all` (Boolean) - whether to use `querySelector` or `querySelectorAll`.
 If `false` passes selectors to `document.querySelector` and returns single animation or `null`, if `true` to `querySelectorAll`, returns `Array` of animations or `null`
