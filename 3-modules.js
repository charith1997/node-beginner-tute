// CommonJS, every file is a module (by default)
// Modules - Encapsulated code (only share minimum)


// const {chalaka, isuru} = require('./3-names')
const names = require('./4-names')
const sayHi = require('./5-utils')
const data = require('./6-alternative-flavor')
require('./7-mind-grenade')

// console.log(names);
// console.log(sayHi);


sayHi('charith')
sayHi(names.chalaka)
sayHi(names.isuru)