import animateweb from 'animate.web'
import { isArray, isObject, isString } from 'underscore'

const animations = {}
let categories = {}
let element, _options

const load = (obj = animateweb) => {
  Object.keys(obj).forEach(function(key) {
    if (key !== 'categories') {
      animations[key] = obj[key]
    }
  })
  categories = obj.categories
  return { animations: animations, categories: categories }
}

const getAnimations = () => {
  return animations
}

const getCategories = () => {
  return categories
}

const getOptions = opts => {
  if (!isObject(opts)) {
    opts = {}
  }
  if (isObject(_options)) {
    Object.keys(_options).forEach(function(key) {
      if (!['play', 'all'].includes(key)) {
        opts[key] = _options[key]
      }
    })
  }
  return opts
}

const webanimate = (selectors, name, options) => {
  _options = options
  let toAnimate
  element = document.querySelector(selectors)
  if (element === null) {
    return null
  }
  if (isString(name)) {
    if (name in animations) {
      toAnimate = animations[name]
    }
  } else if (isArray(name)) {
    return true
  } else if (isObject(name) && isArray(name.keyframes)) {
    toAnimate = name
  }
  if (toAnimate) {
    const animation = element.animate(toAnimate.keyframes, getOptions(toAnimate.options))
    if (animation) {
      if (!options.play) {
        animation.cancel()
      }
      return animation
    }
  }
  return null
}

webanimate.load = load
webanimate.getCategories = getCategories
webanimate.getAnimations = getAnimations
load()
webanimate.categories = getCategories()
webanimate.animations = getAnimations()

export default webanimate
