
/**
 * expose css func
 */

module.exports = css;

/**
 * @var {Element} testEl - clean dom el to test properties on
 * @var {Array} cssPrefixes - css prefixes (dash)
 * @var {Regexp} re - capture capital char
 */

var testEl = document.createElement('p')
  , cssPrefixes = ['-o-', '-ms-', '-moz-', '-webkit-']
  , re = /([A-Z]{1})/g
  ;

/**
 * replace [A-Z] with -[a-z]
 *
 * @param {String}
 * @return {String}
 * @api private
 */

function dasherize (str) {
  return str.replace(re, function() { return '-'+arguments[1].toLowerCase() })
}

/**
 * find the correct property name
 *
 * @param {String}
 * @return {String}
 * @api private
 */

function prefix (property) {
  for (var i = cssPrefixes.length - 1; i >= 0; i--) {
    property = cssPrefixes[i] + dasherize(property);
    if (testEl.style[property] != undefined) return property
  };
}


/**
 * Set css values on element
 *
 * @param {Element} el
 * @param {Object} obj
 * @return {Element}
 * @api public
 */

function css(element, properties){
  for (var property in properties) {
    if (element.style[property] != undefined) element.style[key] = properties[property];
    element.style[prefix(property)] = properties[property];
  }
  return element;
};