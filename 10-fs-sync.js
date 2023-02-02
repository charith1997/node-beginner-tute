const {readFileSync, writeFileSync} = require('fs')

const first = readFileSync('./content/first.txt', 'utf8')
const second = readFileSync('./content/second.txt', 'utf8')

console.log(first, second);

// This will return the text in the content
// writeFileSync('./content/result-sync.txt', `Here is the result ${first}, ${second}`)

// This will append the text
writeFileSync('./content/result-sync.txt', `Here is the result ${first}, ${second}`, {flag: 'a'})